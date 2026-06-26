import { Container } from '../../ui/Container';
import { SvgIcon } from '../../ui/SvgIcon';

export function Footer() {
  return (
    <footer className="bg-oceanic-noir w-full py-16 border-t border-mystic-mint/10">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div>
          <div className="font-label-caps text-label-caps text-mystic-mint mb-6 tracking-widest">AETHERIS</div>
          <p className="font-code-md text-code-md text-mystic-mint opacity-60 max-w-xs mb-8">
            © 2024 Aetheris Systems. <br/>
            Engineered for Precision. All rights reserved.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:justify-items-end">
          <div className="flex flex-col gap-3">
            <a className="font-code-md text-code-md text-mystic-mint hover:text-deep-saffron transition-colors opacity-80 hover:opacity-100 flex items-center gap-2" href="#">
              Privacy Policy <SvgIcon name="link" className="text-[10px]" />
            </a>
            <a className="font-code-md text-code-md text-mystic-mint hover:text-deep-saffron transition-colors opacity-80 hover:opacity-100 flex items-center gap-2" href="#">
              Terms of Service <SvgIcon name="link" className="text-[10px]" />
            </a>
            <a className="font-code-md text-code-md text-mystic-mint hover:text-deep-saffron transition-colors opacity-80 hover:opacity-100 flex items-center gap-2" href="#">
              Security
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="font-code-md text-code-md text-mystic-mint hover:text-deep-saffron transition-colors opacity-80 hover:opacity-100" href="#">Status</a>
            <a className="font-code-md text-code-md text-mystic-mint hover:text-deep-saffron transition-colors opacity-80 hover:opacity-100" href="#">API Docs</a>
            <a className="font-code-md text-code-md text-mystic-mint hover:text-deep-saffron transition-colors opacity-80 hover:opacity-100" href="#">Press Kit</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
