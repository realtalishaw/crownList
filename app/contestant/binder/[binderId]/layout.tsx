import { SideNav } from './components/side-nav';

export default function BinderLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { binderId: string };
}) {
  return (
    <div className="flex min-h-screen">
      <SideNav binderId={params.binderId} />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}