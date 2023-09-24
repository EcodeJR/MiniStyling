const FocusNavigation = () => {
    return ( <>
<div className="relative flex min-h-fit w-full mb-5 shadow-md flex-col overflow-hidden bg-gray-50">
  <img src="/img/beams.jpg" alt="" className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

  <header className="relative bg-white py-4 shadow-xl shadow-black/5 flex items-center flex-col">
    <nav className="flex gap-5 [&:not(:hover)>a]:opacity-100 [&>a]:transition-opacity">
      <a href="#" className="[&:not(:hover)]:opacity-50">Features</a>
      <a href="#" className="[&:not(:hover)]:opacity-50">Solutions</a>
      <a href="#" className="[&:not(:hover)]:opacity-50">Pricing</a>
      <a href="#" className="[&:not(:hover)]:opacity-50">Blog</a>
      <a href="#" className="[&:not(:hover)]:opacity-50">Contact</a>
    </nav>
  </header>
</div>

    </> );
}
 
export default FocusNavigation;