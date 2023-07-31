export type Prispevok = {
  id: string;
  nazov: string;
  popis: string;
  datumZaciatok: string;
  datumKoniec: string;
  obrazky: string[];
  obrazok: string;
  datumVytvorenia: string;
};

export const galeria: Prispevok[] = [
  {
    id: "1",
    nazov: "akcia 1",
    popis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sapien et elit euismod consequat. Curabitur suscipit erat pulvinar nulla egestas tincidunt. Integer massa arcu, scelerisque quis accumsan eu, ultrices vel libero. Duis dui dolor, porta in dui id, congue aliquet nisi. Praesent at massa sit amet arcu pretium bibendum vitae rutrum leo. Aliquam arcu leo, maximus a tincidunt a, congue vel tortor. In vehicula in urna sit amet tempor. Nullam auctor sagittis facilisis.",
    datumZaciatok: "13.7.2023 8:00",
    datumKoniec: "13.7.2023 18:00",
    obrazky: [
      "https://drive.google.com/file/d/1Rw6Vr_jflKtf5PPIjFhl3tdz52tOMbkF/view?usp=sharing",
      "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
      "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
      "https://drive.google.com/file/d/1WpX_eo6i5S65pkJWKiwtsJ_IbcxuQTWz/view?usp=sharing",
      "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
      "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
    ],
    obrazok: "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
    datumVytvorenia: "22.7.2023 10:59:30",
  },
  {
    id: "2",
    nazov: "akcia 2",
    popis:
      "Proin sodales sollicitudin commodo. Sed elementum quis dui at posuere. Curabitur feugiat tellus justo, sed eleifend turpis vulputate sit amet. Suspendisse potenti. Suspendisse ut cursus augue. Vestibulum tincidunt sapien a justo scelerisque tincidunt. Aliquam erat volutpat. In ac rutrum risus. Maecenas tincidunt aliquet enim, eget sagittis mauris aliquet at. Vivamus quis arcu eu dui pharetra rutrum a sed nisi.",
    datumZaciatok: "28.6.2023 15:30",
    datumKoniec: "31.6.2023 12:00",
    obrazky: [
      "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
      "https://drive.google.com/file/d/1WpX_eo6i5S65pkJWKiwtsJ_IbcxuQTWz/view?usp=sharing",
      "https://drive.google.com/file/d/1Rw6Vr_jflKtf5PPIjFhl3tdz52tOMbkF/view?usp=sharing",
      "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
      "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
      "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
    ],
    obrazok: "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
    datumVytvorenia: "22.7.2023 3:29:10",
  },
  {
    id: "3",
    nazov: "akcia 3",
    popis:
      "Aenean arcu libero, tempus nec risus condimentum, suscipit suscipit leo. In egestas, felis sit amet ultrices ultricies, leo nibh pretium purus, id commodo est dui ac ipsum. Morbi elit arcu, eleifend eget consequat elementum, congue sed felis. Praesent laoreet est nec purus pretium, et dignissim tellus vulputate. Donec varius egestas libero, eget viverra lorem semper ut. Vivamus ultricies, purus sed efficitur tincidunt, urna sapien interdum nulla, ",
    datumZaciatok: "1.6.2023",
    datumKoniec: ".",    
    obrazky: [
      "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
      "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
      "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
      "https://drive.google.com/file/d/1Rw6Vr_jflKtf5PPIjFhl3tdz52tOMbkF/view?usp=sharing",
      "https://drive.google.com/file/d/1WpX_eo6i5S65pkJWKiwtsJ_IbcxuQTWz/view?usp=sharing",
      "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
    ],
    obrazok: "https://drive.google.com/file/d/1Rw6Vr_jflKtf5PPIjFhl3tdz52tOMbkF/view?usp=sharing",
    datumVytvorenia: "12.7.2023 13:09:30",
  },
  {
    id: "4",
    nazov: "akcia 4",
    popis:
      "Aenean sodales orci in lacus dapibus, malesuada ultrices lorem elementum. Pellentesque at elit sed orci commodo tincidunt ornare finibus ligula. Maecenas semper, metus vel sagittis tempor, leo orci vulputate mauris, vel bibendum est erat in nibh. In hendrerit lorem at ante ultricies aliquam. Phasellus vitae lorem massa. Sed quis quam eget massa ullamcorper egestas. Nulla et consequat nisl, ac interdum ligula.",
    datumZaciatok: "20.7.2023",
    datumKoniec: ".",
    obrazky: [
      "https://drive.google.com/file/d/1Rw6Vr_jflKtf5PPIjFhl3tdz52tOMbkF/view?usp=sharing",
      "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
      "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
      "https://drive.google.com/file/d/1WpX_eo6i5S65pkJWKiwtsJ_IbcxuQTWz/view?usp=sharing",
      "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
      "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
    ],
    obrazok: "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
    datumVytvorenia: "22.7.2023 11:03:00",
  },
  {
    id: "5",
    nazov: "akcia 5",
    popis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sapien et elit euismod consequat. Curabitur suscipit erat pulvinar nulla egestas tincidunt. Integer massa arcu, scelerisque quis accumsan eu, ultrices vel libero. Duis dui dolor, porta in dui id, congue aliquet nisi. Praesent at massa sit amet arcu pretium bibendum vitae rutrum leo. Aliquam arcu leo, maximus a tincidunt a, congue vel tortor. In vehicula in urna sit amet tempor. Nullam auctor sagittis facilisis.",
    datumZaciatok: "13.7.2023",
    datumKoniec: ".",
    obrazky: [
      "https://drive.google.com/file/d/1Rw6Vr_jflKtf5PPIjFhl3tdz52tOMbkF/view?usp=sharing",
      "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
      "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
      "https://drive.google.com/file/d/1WpX_eo6i5S65pkJWKiwtsJ_IbcxuQTWz/view?usp=sharing",
      "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
      "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
    ],
    obrazok: "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
    datumVytvorenia: "22.7.2023 10:59:30",
  },
  {
    id: "6",
    nazov: "akcia 6",
    popis:
      "Proin sodales sollicitudin commodo. Sed elementum quis dui at posuere. Curabitur feugiat tellus justo, sed eleifend turpis vulputate sit amet. Suspendisse potenti. Suspendisse ut cursus augue. Vestibulum tincidunt sapien a justo scelerisque tincidunt. Aliquam erat volutpat. In ac rutrum risus. Maecenas tincidunt aliquet enim, eget sagittis mauris aliquet at. Vivamus quis arcu eu dui pharetra rutrum a sed nisi.",
    datumZaciatok: "28.6.2023",
    datumKoniec: ".",
    obrazky: [
      "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
      "https://drive.google.com/file/d/1WpX_eo6i5S65pkJWKiwtsJ_IbcxuQTWz/view?usp=sharing",
      "https://drive.google.com/file/d/1Rw6Vr_jflKtf5PPIjFhl3tdz52tOMbkF/view?usp=sharing",
      "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
      "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
      "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
    ],
    obrazok: "https://drive.google.com/file/d/1Rw6Vr_jflKtf5PPIjFhl3tdz52tOMbkF/view?usp=sharing",
    datumVytvorenia: "22.7.2023 3:29:10",
  },
  {
    id: "7",
    nazov: "akcia 7",
    popis:
      "Aenean arcu libero, tempus nec risus condimentum, suscipit suscipit leo. In egestas, felis sit amet ultrices ultricies, leo nibh pretium purus, id commodo est dui ac ipsum. Morbi elit arcu, eleifend eget consequat elementum, congue sed felis. Praesent laoreet est nec purus pretium, et dignissim tellus vulputate. Donec varius egestas libero, eget viverra lorem semper ut. Vivamus ultricies, purus sed efficitur tincidunt, urna sapien interdum nulla, ",
    datumZaciatok: "1.6.2023",
    datumKoniec: ".",    
    obrazky: [
      "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
      "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
      "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
      "https://drive.google.com/file/d/1Rw6Vr_jflKtf5PPIjFhl3tdz52tOMbkF/view?usp=sharing",
      "https://drive.google.com/file/d/1WpX_eo6i5S65pkJWKiwtsJ_IbcxuQTWz/view?usp=sharing",
      "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
    ],
    obrazok:"https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
    datumVytvorenia: "12.7.2023 13:09:30",
  },
  {
    id: "8",
    nazov: "akcia 8",
    popis:
      "Aenean sodales orci in lacus dapibus, malesuada ultrices lorem elementum. Pellentesque at elit sed orci commodo tincidunt ornare finibus ligula. Maecenas semper, metus vel sagittis tempor, leo orci vulputate mauris, vel bibendum est erat in nibh. In hendrerit lorem at ante ultricies aliquam. Phasellus vitae lorem massa. Sed quis quam eget massa ullamcorper egestas. Nulla et consequat nisl, ac interdum ligula.",
    datumZaciatok: "20.7.2023",
    datumKoniec: ".",
    obrazky: [
      "https://drive.google.com/file/d/1Rw6Vr_jflKtf5PPIjFhl3tdz52tOMbkF/view?usp=sharing",
      "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
      "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
      "https://drive.google.com/file/d/1WpX_eo6i5S65pkJWKiwtsJ_IbcxuQTWz/view?usp=sharing",
      "https://drive.google.com/file/d/1W-AIJ_aCI3P4xJ4gFGQBOC2JqJibwn2X/view?usp=sharing",
      "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
    ],
    obrazok: "https://drive.google.com/file/d/1aprpspuJF8FQIRAzJGKs-f9hm0CL08Wj/view?usp=sharing",
    datumVytvorenia: "22.7.2023 11:03:00",
  },
];
