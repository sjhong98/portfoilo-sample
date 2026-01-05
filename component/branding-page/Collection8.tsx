import Collection from '@/component/branding-page/Collection';

export default function Collection8() {
  const outlineImg = '/images/sample3.jpg';
  const banner1 = '/images/sample6.jpg';
  const banner2 = '/images/sample6.jpg';
  const banner3 = '/images/sample6.jpg';
  const banner4 = '/images/sample6.jpg';

  const section1_1 = '/images/sample4.jpg';
  const section1_2 = '/images/sample2.jpg';
  const section1_3 = '/images/sample5.jpg';
  const section1_4 = '/images/sample1.jpg';
  const section1_5 = '/images/sample3.jpg';
  const section1_6 = '/images/sample2.jpg';
  const section1_7 = '/images/sample4.jpg';
  const section1_8 = '/images/sample1.jpg';
  const section1_9 = '/images/sample5.jpg';
  const section1_10 = '/images/sample3.jpg';
  const section1_11 = '/images/sample2.jpg';

  const section2_1 = '/images/sample5.jpg';
  const section2_2 = '/images/sample1.jpg';
  const section2_3 = '/images/sample3.jpg';
  const section2_4 = '/images/sample4.jpg';
  const section2_5 = '/images/sample2.jpg';
  const section2_6 = '/images/sample5.jpg';
  const section2_7 = '/images/sample1.jpg';
  const section2_8 = '/images/sample3.jpg';
  const section2_9 = '/images/sample4.jpg';
  const section2_10 = '/images/sample2.jpg';
  const section2_11 = '/images/sample5.jpg';
  const section2_12 = '/images/sample1.jpg';
  const section2_13 = '/images/sample3.jpg';

  const section3_1 = '/images/sample4.jpg';
  const section3_2 = '/images/sample2.jpg';
  const section3_3 = '/images/sample5.jpg';
  const section3_4 = '/images/sample1.jpg';
  const section3_5 = '/images/sample3.jpg';
  const section3_6 = '/images/sample4.jpg';
  const section3_7 = '/images/sample2.jpg';
  const section3_8 = '/images/sample5.jpg';

  const section4_1 = '/images/sample1.jpg';
  const section4_2 = '/images/sample3.jpg';
  const section4_3 = '/images/sample4.jpg';
  const section4_4 = '/images/sample2.jpg';
  const section4_5 = '/images/sample5.jpg';
  const section4_6 = '/images/sample1.jpg';
  const section4_7 = '/images/sample3.jpg';
  const section4_8 = '/images/sample4.jpg';

  const mainTitle = 'Aliquam eu ullamcorper est. \n';
  const mainSubtitle = 'et varius urna mi ut libero.\n';
  const outlineTitle = '“Sed enim magna”';
  const outlineSubtitle =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n' +
    'In eget pellentesque mi,\n' +
    'vitae mollis leo.';
  const outlineSubtitleMobile =
    'Class aptent taciti sociosqu ad\n' +
    'torquent per conubia nostra\n' +
    'per inceptos himenaeos.\n' +
    'Vivamus posuere erat facilisis,\n' +
    'elementum purus sit amet,\n' +
    'vehicula quam.';
  const outlineContent = `Nulla ac bibendum mi
Nunc sed nunc arcu`;
  const outlineTemplateTitle = 'Donec luctus condimentum velit';
  const outlineTemplateContent =
    'Aenean aliquam nunc diam,\n' +
    'a venenatis augue\n' +
    'consequat eget\n' +
    'Fusce id scelerisque purus.';
  const section1Title = 'semper bibendum';
  const section2Title = 'a vitae leo';
  const section3Title = 'Pellentesque habitant';
  const section4Title = 'morbi tristique';

  const main = '/images/IMG_7009.mov';
  const outline = outlineImg;
  const banner = [banner1, banner2, banner3, banner4];
  const section1 = [
    section1_1,
    section1_2,
    section1_3,
    section1_4,
    section1_5,
    section1_6,
    section1_7,
    section1_8,
    section1_9,
    section1_10,
    section1_11,
  ];
  const section2 = [
    section2_1,
    section2_2,
    section2_3,
    section2_4,
    section2_5,
    section2_6,
    section2_7,
    section2_8,
    section2_9,
    section2_10,
    section2_11,
    section2_12,
    section2_13,
  ];
  const section3 = [section3_1, section3_2, section3_3, section3_4, section3_5, section3_6, section3_7, section3_8];
  const section4 = [section4_1, section4_2, section4_3, section4_4, section4_5, section4_6, section4_7, section4_8];

  const outlineCaption = 'ⓒ hong_seung_jae';

  return (
    <Collection
      outlineCaption={outlineCaption}
      outlineSubtitleMobile={outlineSubtitleMobile}
      main={main}
      mainTitle={mainTitle}
      mainSubtitle={mainSubtitle}
      outlineTitle={outlineTitle}
      outlineSubtitle={outlineSubtitle}
      outlineContent={outlineContent}
      outlineTemplateTitle={outlineTemplateTitle}
      outlineTemplateContent={outlineTemplateContent}
      section1Title={section1Title}
      section2Title={section2Title}
      section3Title={section3Title}
      section4Title={section4Title}
      outlineImg={outline}
      banner={banner}
      section1={section1}
      section2={section2}
      section3={section3}
      section4={section4}
    />
  );
}
