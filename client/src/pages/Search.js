import React from "react";
import SearchForm from "../components/SearchForm";
import ResultsContainer from "../components/ResultsContainer";

class Search extends React.Component {
    render () {
        return (
            <main>
                <SearchForm></SearchForm>
                <ResultsContainer></ResultsContainer>
            </main>
        )
        
    }

}

export default Search;