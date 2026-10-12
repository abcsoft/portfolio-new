import { ShopItem } from '../types';

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 'sh-1',
    title: 'Mainframe Heavyweight Studio Tee',
    edition: 'Edition of 250',
    price: '$78 USD',
    category: 'Apparel',
    description:
      '320 GSM combed organic cotton t-shirt featuring high-density screen-printed Mainframe® logo on left chest and A.R.I.A prompt coordinates across back yoke. Preshrunk with ribbed collar.',
    specs: [
      '100% GOTS certified heavyweight organic cotton',
      'Hand screenprinted in Berlin with water-based inks',
      'Blind-stitched hems with serialized woven brand tag',
      'Boxy architectural cut with dropped shoulders',
    ],
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1974&auto=format&fit=crop',
    status: 'Available',
  },
  {
    id: 'sh-2',
    title: 'Monograph: Structural Monochrome Vol. I',
    edition: 'Edition of 500 numbered',
    price: '$95 USD',
    category: 'Publication',
    description:
      '384-page hardcover archival monograph documenting ten years of digital monoliths, generative code architectures, and unbuilt spatial experiments at Mainframe.',
    specs: [
      'Printed by EBS Verona on 150gsm Fedrigoni Symbol Tatami',
      'Black buckram cloth binding with blind debossed typography',
      'Bilingual text in English and German',
      'Includes custom metallic dust sleeve and archival bookmark',
    ],
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop',
    status: 'Available',
  },
  {
    id: 'sh-3',
    title: 'Studio Grid Archive Poster Series',
    edition: 'Edition of 100 per print',
    price: '$65 USD',
    category: 'Print',
    description:
      'Silkscreen printed on 300gsm Colorplan Dark Grey. Features mathematical typography specimen compositions and algorithmic coordinate diagrams from Mainframe Labs.',
    specs: [
      'Dimensions: 594 × 841 mm (Standard DIN A1)',
      'Hand-pulled 2-color silkscreen with silver metallic ink',
      'Hand-numbered and stamped with Mainframe studio seal',
      'Shipped rolled in custom heavy-gauge kraft tube',
    ],
    image:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1908&auto=format&fit=crop',
    status: 'Available',
  },
  {
    id: 'sh-4',
    title: 'FORM/01 Aluminum Desk Weight & Dial',
    edition: 'Edition of 150 serialized',
    price: '$120 USD',
    category: 'Object',
    description:
      'CNC milled from solid billet 6061-T6 aluminum with bead-blasted matte black anodizing. Weighted tactile desktop dial with smooth fluid dampening bearing.',
    specs: [
      'Weight: 480 grams solid machined aluminum',
      'Zero-backlash sealed ceramic ball bearing mechanism',
      'Laser engraved studio registration numbers',
      'Custom cork base pad to protect wooden desks',
    ],
    image:
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop',
    status: 'Pre-order',
  },
];
