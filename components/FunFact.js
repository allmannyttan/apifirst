import React, { useState } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FunFact = () => {
  const [counter, setCounter] = useState({
    startCounter: false,
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="funfact-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 4789 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Överflödiga inlogg</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 2400 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Bifogade filer i onödan</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 511 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Onödiga telefonsamtal</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 200000 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Orealiserade drömmar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
