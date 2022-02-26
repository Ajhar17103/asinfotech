import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import HomeUrl from '../assets/images/home-border.png';
import Web from '../assets/images/service/coding.png';
import App from '../assets/images/service/apps.png';
import Ecommerce from '../assets/images/service/ecommerce.png';
import ITConsultancy from '../assets/images/service/ecommerce.png';
import DigitalM from '../assets/images/service/digital.png';
import IoT from '../assets/images/service/iot.png';


export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          id: 'service1',
          icon: Web,
          title: "Web Development",
          description: "We provide world class Web Development service, We Follow current trend of Web Development."
        },
        {
          id: 'service2',
          icon: App,
          title: "Apps Development",
          description: 'Vestibulum eu tortor artett tortor rhoncus porta quis on metus morbi comodo nisi vitae neque aliquam aliquam.'
        },
        {
          id: 'service3',
          icon: Ecommerce,
          title: "E-commerce (B2b,B2C)",
          description: 'We provide our client Single vendor, Multi vendor, Rental Software for their  Business  '
        },
        {
          id: 'service4',
          icon: ITConsultancy,
          title: "IT Consultancy",
          description: 'We provide our client good IT Consultancy'
        },
        {
          id: 'service5',
          icon: DigitalM,
          title: "Digital Marketing",
          description: 'We provide our client good Digital Marketing Service'
        },
        {
          id: 'service6',
          icon: IoT,
          title: "IoT",
          description: 'We provide our client good IoT Service'
        },
      ],
      counters: [
        {
          id: '1',
          extraclass: '',
          start: 5,
          end: 9,
          title: "Employees",
          description: 'Aliquam egestas vehicula sapien cibus sit amet rutrum dolor molestie.'
        },
        {
          id: '2',
          extraclass: 'pt-3',
          start: 1,
          end: 50,
          title: "Projects",
          description: 'Pellentesque habitant morbi malesuada fames ac turpis egestas.'
        },
        {
          id: '3',
          extraclass: 'pt-3',
          start: 5,
          end: 30,
          title: "CLIENTS",
          description: 'Suspendisse congue risus consequat sapien potitor risus tincidunt.'
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-services" id="services">
          <Container>
            <Row>
              <Col lg="12">
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">Provide Awesome Services </h3>
                  <p className="text-muted f-17 mt-3">A&S INFOTECH is an IT Solution provider. We are first growing IT company <br /> that provides various Software solutions and wide range of supports.
                            </p>

                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              {/* Render Footer Link */}
              {this.state.services.map((item, key) => (
                <Col lg={4} key={key}>
                  <div className="services-box p-4 mt-4">
                    <div className="services-icon bg-soft-primary">
                    <img src={item.icon} alt='asinfotech' style={{height:'40px'}} />
                      <FontAwesomeIcon icon={`${item.icon}`} />
                    </div>

                    <h5 className="mt-4">{item.title}</h5>
                    <p className="text-muted mt-3">{item.description}</p>

                    <div className="mt-3">
                      <Link to="#" className="text-primary f-16">Learn More <i className="mdi mdi-arrow-right ml-1"></i></Link>
                    </div>

                  </div>
                </Col>
              ))}
            </Row>
            <Row className="align-items-center mt-5 pt-4" id="counter">
              <Col lg={6}>
                <div className="pr-4 mt-4">
                  <p className="text-uppercase">why choose us </p>
                  <h4>Boots Your Business With A&S INFOTECH!</h4>
                  <p className="text-muted mt-3">A&S INFOTECH is a first Growing IT company but we never compromised with quality. We always focus on client requirement and try to understand what they want. we try to give them innovative idea with easy solutions.
                  <br /> 
                  We always ready to take Challenge for next level!</p>
                  <div className="mt-4 pt-1">
                    <Link to="#" className="btn btn-outline-primary">Discover More</Link>
                  </div>
                </div>
              </Col>
              <Col lg={5} className="offset-lg-1">
                <div className="counter-box">
                  {this.state.counters.map((counteritem, key) => (
                    <div className={ (counteritem.id !== '1') ? 'mt-4 pt-3' : 'mt-4' } key={key}>
                      <div className="media">
                        <div className="count-box bg-soft-primary text-center">
                          <h3 className="counter-count mb-1 text-primary"> 
                          <CountUp className="counter-value" delay={2} start={counteritem.start} end={counteritem.end} />{" "}
                            <span className="count-plus text-primary"> +</span></h3>
                          <p className="text-uppercase text-muted mb-0 f-14">{counteritem.title} </p>
                        </div>
                        <div className="media-body pl-4">
                          <p className="text-muted mb-0 mt-3">{counteritem.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
