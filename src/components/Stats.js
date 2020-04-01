import React from 'react';
import { Helmet } from 'react-helmet';
import { score$ } from '../actions/Store';

import Card from 'react-bootstrap/Card';

export default function Stats() {
  return (
    <>
      <Helmet>
        <title>Stats</title>{' '}
      </Helmet>
      <main>
        <Card className='Card'>
          <h2>Stats</h2>
          <p>
            Macaroon gummi bears jujubes gummi bears halvah marshmallow wafer
            muffin. Bear claw chocolate I love cheesecake cake donut lollipop
            wafer jujubes. Chupa chups candy I love chocolate bar. Biscuit
            powder biscuit I love soufflé marzipan I love.
          </p>

          <p>
            Macaroon gummi bears jujubes gummi bears halvah marshmallow wafer
            muffin. Bear claw chocolate I love cheesecake cake donut lollipop
            wafer jujubes. Chupa chups candy I love chocolate bar. Biscuit
            powder biscuit I love soufflé marzipan I love.
          </p>

          <p>
            Macaroon gummi bears jujubes gummi bears halvah marshmallow wafer
            muffin. Bear claw chocolate I love cheesecake cake donut lollipop
            wafer jujubes. Chupa chups candy I love chocolate bar. Biscuit
            powder biscuit I love soufflé marzipan I love.
          </p>
        </Card>
      </main>
    </>
  );
}
