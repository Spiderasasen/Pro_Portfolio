import contact from '../data/contact.json';

function Contact_card(){
    return(
      <div>
          {contact.map((item) =>(
              <div key={item.id} className="contact_card">
                  <h3>{item.Name}</h3>
                  <a href={item.contact_link}>Link for {item.Name}</a>
              </div>
          ))}
      </div>
    );
}
export default Contact_card;