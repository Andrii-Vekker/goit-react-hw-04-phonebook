
import { List, Item } from "./ContactList.styled";
import { BtnAdd } from "components/Form/Form.styled";
    import PropTypes from 'prop-types';


export default function ContactsList({ contacts, removeContacts }) {
    

    return (
        <>
    
            <List>
                {contacts.map(({ name, number, id }) => (
                
                    <Item key={id}>{name} : {number}
                        <BtnAdd type="button" onClick={() => removeContacts(id)}>Delete
                        </BtnAdd>
                    </Item>
                                    
                ))}
            </List>
        </>
    );
};

ContactsList.propTypes = {
    removeContacts: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    )
};
    