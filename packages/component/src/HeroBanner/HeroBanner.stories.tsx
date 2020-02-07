import React from 'react';
import HeroBanner from './';

export default {
  component: HeroBanner,
  title: 'Component/HeroBanner'
};

export const Demo = () => (
  <HeroBanner
    title="Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta sadipscing te."
    subtitle="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum."
    btn1Text="Primary Action"
    btn2Text="Secondary Action"
  />
);
