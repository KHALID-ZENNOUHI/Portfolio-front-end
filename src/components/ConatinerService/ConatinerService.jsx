import Service from "../Service/Service";
const ConatinerService = ({title}) => {
    return (
        <section className="services scale-animation" data-delay="1.3">
          <div className="spacer-45"></div>
          <div className="spacer-45"></div>
          <h className="underline-title">{title}</h>
          <div className="row services">
            <div className="spacer-60"></div>
             <Service><i className="flaticon-web-design"></i> Web Design</Service>
          </div>
        </section>
    )
}
export default ConatinerService;