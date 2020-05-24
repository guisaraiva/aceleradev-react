import React from 'react';
class Contact extends React.Component {
  dateFormatter = date => {
    const dateParser = new Intl.DateTimeFormat('pt-br');
    return dateParser.format(new Date(date));
  }
  render() {
    const data = this.props.data;
    return (
      <article data-testid ="contact" className="contact">
        <img className="contact__avatar" src={data.avatar} alt={data.name}/>
        <span className="contact__data" data-testid="contact-name">{data.name}</span>
        <span className="contact__data" data-testid="contact-phone">{data.phone}</span>
        <span className="contact__data" data-testid="contact-country">{data.country}</span>
        <span className="contact__data" data-testid="contact-date">{this.dateFormatter(data.admissionDate)}</span>
        <span className="contact__data" data-testid="contact-company">{data.company}</span>
        <span className="contact__data" data-testid="contact-department">{data.department}</span>
      </article>
    );
  }
}
export default Contact;

