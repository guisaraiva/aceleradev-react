import React from 'react';
import dayjs from 'dayjs';
export default class Contact extends React.Component {

  render() {
    const data = this.props.data; //Carrega os dados do arquivo JSON através do props.
    const { admissionDate } = this.props.data
    const date = !admissionDate ? "" : dayjs(admissionDate).format('DD/MM/YYYY');
    return (
      <article data-testid ="contact" className="contact">
        <img className="contact__avatar" src={data.avatar} alt={data.name}/>
        <span className="contact__data" data-testid="contact-name">{data.name}</span>
        <span className="contact__data" data-testid="contact-phone">{data.phone}</span>
        <span className="contact__data" data-testid="contact-country">{data.country}</span>
        <span className="contact__data" data-testid="contact-date">{date}</span>
        <span className="contact__data" data-testid="contact-company">{data.company}</span>
        <span className="contact__data" data-testid="contact-department">{data.department}</span>
      </article>
    );
  }
}