import { Container } from '../../ui/Container';
import { SvgIcon } from '../../ui/SvgIcon';

export function Footer() {
  const openModal = (title: string, message: string) => {
    window.dispatchEvent(new CustomEvent('open-aetheris-modal', { detail: { title, message } }));
  };

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
            <a 
              className="font-code-md text-code-md text-mystic-mint hover:text-deep-saffron transition-colors opacity-80 hover:opacity-100 flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none" 
              onClick={(e) => { e.preventDefault(); openModal('Legal & Privacy', 'You are accessing version archive 2024.1. Privacy frameworks are fully aligned with global cryptographic auditing standards.'); }}
              href="#"
            >
              Privacy Policy <SvgIcon name="link" className="text-[10px]" />
            </a>
            <a 
              className="font-code-md text-code-md text-mystic-mint hover:text-deep-saffron transition-colors opacity-80 hover:opacity-100 flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none" 
              onClick={(e) => { e.preventDefault(); openModal('Terms of Service', 'Enterprise operations are governed by our Aetheris Platform SLA. Contact legal for custom overrides.'); }}
              href="#"
            >
              Terms of Service <SvgIcon name="link" className="text-[10px]" />
            </a>
            <a 
              className="font-code-md text-code-md text-mystic-mint hover:text-deep-saffron transition-colors opacity-80 hover:opacity-100 flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none" 
              onClick={(e) => { e.preventDefault(); openModal('Security Operations', 'All platform components are certified under SOC2 Type II, ISO/IEC 27001, and our proprietary ledger proof integrity.'); }}
              href="#"
            >
              Security
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a 
              className="font-code-md text-code-md text-mystic-mint hover:text-deep-saffron transition-colors opacity-80 hover:opacity-100 cursor-pointer focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none" 
              onClick={(e) => { e.preventDefault(); openModal('Network Status', 'All orchestration nodes operational. Precision latency: 4.8ms. Incident report history is available on enterprise client consoles.'); }}
              href="#"
            >
              Status
            </a>
            <a 
              className="font-code-md text-code-md text-mystic-mint hover:text-deep-saffron transition-colors opacity-80 hover:opacity-100 cursor-pointer focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none" 
              onClick={(e) => { e.preventDefault(); openModal('API Documentation', 'API keys and documentation are distributed through the client developer console. Sandbox endpoints require validated developer tokens.'); }}
              href="#"
            >
              API Docs
            </a>
            <a 
              className="font-code-md text-code-md text-mystic-mint hover:text-deep-saffron transition-colors opacity-80 hover:opacity-100 cursor-pointer focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none" 
              onClick={(e) => { e.preventDefault(); openModal('Media Assets', 'Aetheris brand assets, color specifications, and typography guidelines are archived for partner press use. Request package access via media@aetheris.ai.'); }}
              href="#"
            >
              Press Kit
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
