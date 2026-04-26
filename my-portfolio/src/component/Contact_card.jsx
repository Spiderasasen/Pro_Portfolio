import contact from '../data/contact.json';
import "../styles/contact.css";

function Contact_card() {
    return (
        <div>
            {contact.map((item) => {
                // If it's email, build a mailto link
                const link =
                    item.Name.toLowerCase() === "email"
                        ? `mailto:${item.contact_link}`
                        : item.contact_link;

                return (
                    <div
                        key={item.id}
                        className="contact_card"
                        onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
                    >
                        <h3>{item.Name}</h3>
                        <a
                            href={link}
                            onClick={(e) => e.stopPropagation()}
                        >
                            Link for {item.Name}
                        </a>
                    </div>
                );
            })}
        </div>
    );
}

export default Contact_card;
