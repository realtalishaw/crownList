# Authentication Pages Documentation

## LoginPage (/auth/login)
**Description:** Main login page allowing users to authenticate using email/password or magic link.

**User Stories:**
- As a user, I want to login to my account securely
- As a user, I want to reset my password if forgotten
- As a user, I want to enable/use two-factor authentication
- As a user, I want to see login errors clearly

**Components:**
- Login form
- Magic link option
- 2FA verification input
- Password reset link
- Social login options
- Error messaging
- Remember me toggle

**APIs:**
- POST `/auth/login`

## RegisterPage (/auth/register)
**Description:** User registration page with role selection and basic profile setup.

**User Stories:**
- As a user, I want to create a new account
- As a user, I want to select my platform role
- As a user, I want to verify my email address
- As a user, I want to understand the registration process

**Components:**
- Registration form
- Role selection
- Email verification status
- Terms acceptance
- Password requirements
- Profile completion progress
- Step-by-step guide

**APIs:**
- POST `/auth/register`
- GET `/user-status` (for email verification)

## ResetPasswordPage (/auth/reset-password)
**Description:** Password reset functionality with email verification.

**User Stories:**
- As a user, I want to reset my forgotten password
- As a user, I want to receive reset instructions via email
- As a user, I want to create a secure new password
- As a user, I want confirmation of successful reset

**Components:**
- Reset request form
- Email verification code input
- New password form
- Password strength indicator
- Success confirmation
- Return to login link
- Support contact

**APIs:**
- POST `/auth/reset-password`
