import { Label, FilteredInput, Span} from "../ContactsList/ContactList.styled";
import PropTypes from 'prop-types';

export default function Filter({filter, handleChange}) {
    return (
        <>
            <Label htmlFor="filter">
                <Span>Find contacts by name</Span>
                <FilteredInput type="text" name="filter" value={filter} onChange={handleChange} />
                
            </Label>
        </>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}
