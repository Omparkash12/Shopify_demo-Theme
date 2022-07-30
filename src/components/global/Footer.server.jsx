import { useUrl } from '@shopify/hydrogen';
import { Disclosure } from '@headlessui/react';


import { Section, Heading, FooterMenu, CountrySelector } from '~/components';



// Images
import footer_brand_logo from '../../assets/footer_brand_logo.png';
import FooterSection from './FooterSection.client';



/**
 * A server component that specifies the content of the footer on the website
 */
export function Footer({ menu }) {
  const { pathname } = useUrl();

  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : null;

  const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`;
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 4
      : menu?.items?.length + 2
    : [];

  return (
    <section className="footer_ar bg-[#fff]">
      <div className="container_ar">
        <Section
          divider={isHome ? 'none' : 'top'}
          as="footer"
          role="contentinfo"
          className={`footer_links_ar !px-[0px] !py-[3rem] grid min-h-[20rem] items-start grid-flow-row w-full gap-6 border-b md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount} bg-[#fff] dark:bg-contrast dark:text-primary text-[#000] overflow-hidden`}
        >


          <FooterSection />

          <FooterMenu className='font-["Ambroise_Demi"]' menu={menu} />
          {/* <section className="grid gap-4 w-full md:max-w-[335px] md:ml-auto">
            <Heading size="lead" className="cursor-default" as="h3">
              Country
            </Heading>
            <CountrySelector />
          </section>
          <div
            className={`self-end pt-8 opacity-50 md:col-span-2 lg:col-span-${itemsCount}`}
          >
            &copy; {new Date().getFullYear()} / Shopify, Inc. Hydrogen is an MIT
            Licensed Open Source project. This website is carbon&nbsp;neutral.
          </div> */}
        </Section >
      </div>
    </section >
  );
}
