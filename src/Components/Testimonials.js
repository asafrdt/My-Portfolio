import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function (
        testimonials
      ) {
        return (
          <li key={testimonials.user}>
            <span style={{ color: "white", textAlign: "center" }}>
              <h1>{testimonials.text}</h1>
              <br />
              <br />
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/333801741"
                width="384"
                height="216"
                frameborder="0"
                allowfullscreen
              ></iframe>
              &nbsp;
              <iframe
                src="https://player.vimeo.com/video/358369759"
                width="384"
                height="216"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
              <br />
              <br />
              <iframe
                src="https://player.vimeo.com/video/237260325"
                width="384"
                height="216"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
              <iframe
                src="https://player.vimeo.com/video/237257935"
                width="384"
                height="216"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
              <br />
              <br />
              <iframe
                src="https://player.vimeo.com/video/243032547"
                width="384"
                height="216"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
              <iframe
                src="https://player.vimeo.com/video/303544416"
                width="384"
                height="216"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
              <br />
              <br />
              <iframe
                src="https://player.vimeo.com/video/237238722"
                width="384"
                height="216"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
              <iframe
                src="https://player.vimeo.com/video/360015393"
                width="384"
                height="216"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
              <br />
              <br />
              <br />
              <h1 style={{ textAlign: "center" }}>
                For more, visit my{" "}
                <a href="https://vimeo.com/user68116729">Vimeo</a> page.
              </h1>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            {/*    <div className="two columns header-col"></div>

            <div className="ten columns flex-container"> */}
            <ul className="slides">{testimonials}</ul>
            {/* </div>*/}
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
