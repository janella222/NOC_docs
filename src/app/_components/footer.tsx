import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
       
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Home
            </a>
            <a
              href={`https://resolve.consolidated.com/resolve/jsp/rsclient.jsp?=GWKN-OWYW-HR06-FMLV-X4V8-87P0-D960-72ZJ#RS.wiki.Main/name=Documentation.CFNOC.CA.VDSL_Provision_Voice`}
              className="mx-3 font-bold hover:underline"
            >
              view docs in resolve
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
