

const Service  = ({children}) => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div className="service-item">
            <h5>
              {children}
            </h5>
          </div>
        </div>
    )
}
export default Service;