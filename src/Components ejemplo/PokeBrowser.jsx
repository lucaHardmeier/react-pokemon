

const PokeBrowser = ({ setSearch }) => {
    return (
        <form>
            <label htmlFor="search"></label>
            <input type="text" name="search" onChange={e => setSearch(e.target.value)} />
        </form>
    )
}

export default PokeBrowser