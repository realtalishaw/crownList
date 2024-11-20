const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const baseDir = './Instructions/openapi';
const outputFile = './combined-openapi.yaml';

// Helper function to ensure directory exists
function ensureDirectoryExists(dir) {
    if (!fs.existsSync(dir)) {
        console.warn(`Warning: Directory ${dir} does not exist`);
        return false;
    }
    return true;
}

// Function to read YAML file with better error handling
function readYamlFile(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            console.warn(`Warning: File ${filePath} does not exist`);
            return null;
        }
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return yaml.load(fileContent);
    } catch (error) {
        if (error instanceof yaml.YAMLException) {
            console.error(`YAML parsing error in ${filePath}:`);
            console.error(`Line ${error.mark.line + 1}, Column ${error.mark.column + 1}`);
            console.error(error.reason);
            console.error('Snippet:', error.mark.snippet);
        } else {
            console.error(`Error reading file ${filePath}:`, error.message);
        }
        return null;
    }
}

// Function to resolve $ref in objects
function resolveRefs(obj, basePath) {
    if (!obj) return obj;

    if (typeof obj === 'object') {
        for (let key in obj) {
            if (key === '$ref' && typeof obj[key] === 'string' && obj[key].startsWith('./')) {
                const refPath = path.join(basePath, obj[key]);
                const refContent = readYamlFile(refPath);
                if (refContent) {
                    return refContent;
                }
            } else {
                obj[key] = resolveRefs(obj[key], basePath);
            }
        }
    }
    return obj;
}

// Function to combine all files
function combineOpenApiFiles() {
    console.log('Starting OpenAPI file combination...');

    // Read the base OpenAPI file
    const baseOpenApi = readYamlFile(path.join(baseDir, 'index.yaml'));
    if (!baseOpenApi) {
        console.error('Failed to read base OpenAPI file. Aborting.');
        return;
    }

    // Initialize paths and schemas objects
    baseOpenApi.paths = baseOpenApi.paths || {};
    baseOpenApi.components = baseOpenApi.components || {};
    baseOpenApi.components.schemas = baseOpenApi.components.schemas || {};

    // Process schemas
    const schemasDir = path.join(baseDir, 'schemas');
    if (ensureDirectoryExists(schemasDir)) {
        console.log('Processing schema files...');
        fs.readdirSync(schemasDir).forEach(file => {
            if (file.endsWith('.yaml')) {
                console.log(`Processing schema file: ${file}`);
                const schemaContent = readYamlFile(path.join(schemasDir, file));
                if (schemaContent) {
                    Object.assign(baseOpenApi.components.schemas, 
                        resolveRefs(schemaContent, schemasDir));
                }
            }
        });
    }

    // Process paths
    const pathsDir = path.join(baseDir, 'paths');
    if (ensureDirectoryExists(pathsDir)) {
        console.log('Processing path files...');
        fs.readdirSync(pathsDir).forEach(file => {
            if (file.endsWith('.yaml')) {
                console.log(`Processing path file: ${file}`);
                const pathContent = readYamlFile(path.join(pathsDir, file));
                if (pathContent) {
                    Object.assign(baseOpenApi.paths, 
                        resolveRefs(pathContent, pathsDir));
                }
            }
        });
    }

    // Write the combined file
    try {
        console.log('Writing combined OpenAPI file...');
        const combinedYaml = yaml.dump(baseOpenApi, {
            indent: 2,
            lineWidth: -1,
            noRefs: true
        });
        fs.writeFileSync(outputFile, combinedYaml, 'utf8');
        console.log(`Successfully combined OpenAPI files into ${outputFile}`);
        
        // Log some statistics
        console.log('\nCombination Statistics:');
        console.log(`Total paths: ${Object.keys(baseOpenApi.paths).length}`);
        console.log(`Total schemas: ${Object.keys(baseOpenApi.components.schemas).length}`);
    } catch (error) {
        console.error('Error writing combined file:', error.message);
    }
}

// Run the combination
console.log('Starting OpenAPI combination process...');
combineOpenApiFiles();