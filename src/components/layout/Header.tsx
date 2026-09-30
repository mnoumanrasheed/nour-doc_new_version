import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '../common/Button';
import contentData from '../../data.json';

type MenuItem = { title: string; path: string; description: string };
type MenuGroup = { label: string; items: MenuItem[] };

const groups: MenuGroup[] = [
  { label: 'Product', items: [
    { title: 'AI Platform', path: '/product', description: 'Ambient intelligence for every encounter.' },
    { title: 'Coding & Billing', path: '/medical-coding-billing', description: 'Cleaner documentation and revenue cycles.' },
    { title: 'Integrations & Deployment', path: '/integrations-deployment', description: 'Connect care teams and systems.' },
    { title: 'Security & Compliance', path: '/security-compliance', description: 'Enterprise-grade health data protection.' },
  ] },
  { label: 'Why NourDoc', items: [
    { title: 'Why NourDoc', path: '/why-nourdoc', description: 'More time for patients.' },
    { title: 'Clinical Benefits', path: '/benefits', description: 'Impact across clinical workflows.' },
  ] },
  { label: 'Company', items: [
    { title: 'About NourDoc', path: '/about', description: 'Meet the team improving clinical work.' },
    { title: 'Partners & Collaborators', path: '/partners-collaborators', description: 'Build the future of connected care.' },
  ] },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const appStoreUrl = contentData.brand.appStoreUrl;
  const demoPath = '/contact?intent=bookDemo&topic=Other';
  const isActive = (path: string) => location.pathname === path;
  const groupIsActive = (group: MenuGroup) => group.items.some((item) => isActive(item.path));

  useEffect(() => {
    const updateScrollState = () => {
      frameRef.current = null;
      setScrolled(window.scrollY > 24);
    };
    const handleScroll = () => {
      if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(updateScrollState);
    };
    updateScrollState();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isOpen ? 'hidden' : previousOverflow;
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const closeMenus = () => setOpenGroup(null);
  const handleNavKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      closeMenus();
      (event.target as HTMLElement).blur();
      return;
    }
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    const target = event.target as HTMLElement;
    const groupLabel = target.dataset.group;
    if (groupLabel && event.key === 'ArrowDown') {
      event.preventDefault();
      setOpenGroup(groupLabel);
      window.requestAnimationFrame(() => navRef.current?.querySelector<HTMLElement>(`[data-menu="${groupLabel}"] a`)?.focus());
      return;
    }
    const items = Array.from(navRef.current?.querySelectorAll<HTMLElement>('[data-nav-item]') ?? []);
    const current = items.indexOf(target);
    if (current < 0) return;
    event.preventDefault();
    items[(current + (event.key === 'ArrowDown' ? 1 : items.length - 1)) % items.length]?.focus();
  };

  return (
    <header className={`fixed left-1/2 top-[14px] z-50 w-[calc(100%-32px)] -translate-x-1/2 transition-[height,background-color,box-shadow] duration-[250ms] ease-out ${scrolled ? 'h-[58px]' : 'h-16'}`}>
      <div className={`flex h-full items-center gap-5 rounded-[20px] border border-[rgba(16,24,40,0.06)] px-5 backdrop-blur-[16px] [backdrop-filter:saturate(160%)_blur(16px)] transition-[background-color,box-shadow] duration-[250ms] ease-out ${scrolled ? 'bg-[rgba(255,255,255,0.88)] shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_34px_rgba(16,24,40,0.11)]' : 'bg-[rgba(255,255,255,0.72)] shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_30px_rgba(16,24,40,0.08)]'}`}>
        <Link to="/" className="group flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-none" aria-label="NourDoc Home">
          <img src="/logo.png" alt="NourDoc emblem" className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-[1.03]" />
          <span className="text-[19px] font-semibold tracking-[-0.035em] text-slate-900 transition-colors group-hover:text-nourdoc-primary">NourDoc</span>
        </Link>

        <nav ref={navRef} onKeyDown={handleNavKeyDown} className="hidden flex-1 items-center justify-center gap-7 lg:flex" aria-label="Main">
          {groups.map((group) => (
            <div key={group.label} className="relative" onMouseEnter={() => setOpenGroup(group.label)} onMouseLeave={closeMenus}>
              <button type="button" data-nav-item data-group={group.label} aria-haspopup="menu" aria-expanded={openGroup === group.label} onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)} className={`group relative flex h-10 items-center gap-1.5 whitespace-nowrap rounded-md text-[15px] font-medium transition-colors focus-visible:outline-none ${groupIsActive(group) || openGroup === group.label ? 'text-nourdoc-primary' : 'text-slate-700 hover:text-nourdoc-primary'}`}>
                {group.label}<ChevronDown aria-hidden="true" className={`h-3 w-3 transition-transform duration-150 ${openGroup === group.label ? 'rotate-180' : ''}`} />
                {groupIsActive(group) && <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-nourdoc-primary" />}
              </button>
              <span className="absolute left-1/2 top-full h-3 w-[calc(100%+24px)] -translate-x-1/2" aria-hidden="true" />
              <div data-menu={group.label} role="menu" className={`absolute left-1/2 top-[calc(100%+12px)] z-20 min-w-[280px] -translate-x-1/2 rounded-2xl border border-[rgba(16,24,40,0.06)] bg-white p-2 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_12px_32px_rgba(16,24,40,0.08)] transition-[opacity,transform,visibility] duration-[160ms] ease-out ${openGroup === group.label ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-1.5 opacity-0'}`}>
                {group.items.map((item) => <Link key={item.path} to={item.path} role="menuitem" data-nav-item onClick={closeMenus} className={`group block rounded-[10px] px-3.5 py-3 transition-colors focus-visible:outline-none ${isActive(item.path) ? 'bg-[#F4F7F5]' : 'hover:bg-[#F4F7F5]'}`}><span className={`block whitespace-nowrap text-[15px] font-medium ${isActive(item.path) ? 'text-nourdoc-primary' : 'text-slate-800 group-hover:text-nourdoc-primary'}`}>{item.title}</span><span className="mt-0.5 block whitespace-nowrap text-[13px] font-normal leading-[1.4] text-slate-500">{item.description}</span></Link>)}
              </div>
            </div>
          ))}
          <Link data-nav-item to="/subscription" className={`group relative flex h-10 items-center whitespace-nowrap rounded-md text-[15px] font-medium transition-colors focus-visible:outline-none ${isActive('/subscription') ? 'text-nourdoc-primary' : 'text-slate-700 hover:text-nourdoc-primary'}`}>Pricing{isActive('/subscription') && <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-nourdoc-primary" />}</Link>
        </nav>

        <div className="hidden shrink-0 items-center gap-1 lg:flex">
          <Button href={appStoreUrl} external variant="ghost" size="sm" className="h-10 rounded-[10px] whitespace-nowrap px-3 text-[15px] font-medium">Try Free</Button>
          <Button to={demoPath} variant="primary" size="sm" className="h-[42px] rounded-xl whitespace-nowrap px-5 text-[15px] font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(40,98,82,0.22)] hover:-translate-y-px">Book a Demo</Button>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <Button to={demoPath} onClick={() => setIsOpen(false)} variant="primary" size="sm" className="h-10 rounded-xl whitespace-nowrap px-3 text-sm font-semibold">Book a Demo</Button>
          <button type="button" onClick={() => setIsOpen(true)} className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 hover:bg-nourdoc-primary-light hover:text-nourdoc-primary focus-visible:outline-none" aria-label="Open menu" aria-expanded={isOpen} aria-controls="mobile-navigation"><Menu className="h-6 w-6" /></button>
        </div>
      </div>

      {isOpen && <div className="fixed inset-0 z-[55] bg-nourdoc-primary-dark/35 backdrop-blur-sm lg:hidden" aria-hidden="true" onClick={() => setIsOpen(false)} />}
      <aside id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!isOpen} className={`fixed right-0 top-0 z-[60] flex h-dvh w-full max-w-md flex-col bg-white pt-24 shadow-2xl transition-[transform,visibility] duration-200 lg:hidden ${isOpen ? 'visible translate-x-0' : 'invisible translate-x-full'}`}>
        <div className="flex-1 overflow-y-auto px-5 py-5">
          <nav aria-label="Mobile Main">
            {groups.map((group) => <div key={group.label} className="border-b border-slate-100"><button type="button" aria-expanded={openGroup === group.label} aria-haspopup="true" onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)} className="flex h-[52px] w-full items-center justify-between text-left text-[17px] font-medium text-slate-800 focus-visible:outline-none">{group.label}<ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-150 ${openGroup === group.label ? 'rotate-180 text-nourdoc-primary' : ''}`} /></button>{openGroup === group.label && <div className="pb-2">{group.items.map((item) => <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`flex h-[52px] items-center rounded-lg px-3 text-[17px] font-medium ${isActive(item.path) ? 'bg-nourdoc-primary-light text-nourdoc-primary' : 'text-slate-600 hover:bg-slate-50'}`}>{item.title}</Link>)}</div>}</div>)}
            <Link to="/subscription" onClick={() => setIsOpen(false)} className={`flex h-[52px] items-center border-b border-slate-100 text-[17px] font-medium ${isActive('/subscription') ? 'text-nourdoc-primary' : 'text-slate-800'}`}>Pricing</Link>
          </nav>
        </div>
        <div className="space-y-3 border-t border-slate-100 bg-white p-5 pb-7">
          <Button href={appStoreUrl} external variant="ghost" size="md" className="h-12 w-full justify-center rounded-xl text-base">Try Free</Button>
          <Button to={demoPath} onClick={() => setIsOpen(false)} variant="primary" size="md" className="h-12 w-full justify-center rounded-xl text-base shadow-[0_6px_16px_rgba(40,98,82,0.2)]">Book a Demo</Button>
        </div>
        <button type="button" onClick={() => setIsOpen(false)} className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:outline-none" aria-label="Close menu"><X className="h-6 w-6" /></button>
      </aside>
    </header>
  );
};
