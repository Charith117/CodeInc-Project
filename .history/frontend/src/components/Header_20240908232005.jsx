import Navigation from './Navigation';

function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">CodSoft</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;