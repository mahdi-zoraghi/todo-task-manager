import { IconButton, TextField } from "@material-ui/core"
import {
  ArrowForwardIos as ArrowForwardIosIcon,
  ArrowBackIos as ArrowBackIosIcon,
  Search as SearchIcon,
} from "@material-ui/icons"

const HeaderNav = () => {
  return (
    <section className="headerNav">
      <div>
        <span>November 2019</span>
      </div>
      <div>
        <div>
          <span>Today</span>
          <span>18, Mon</span>
        </div>
        <div>
          <IconButton size="small" className="arrowIcon">
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>
          <span>Day</span>
          <span>Week</span>
          <span
            style={{
              color: "#fff",
              backgroundColor: "#ea9165",
              borderRadius: "10px",
              padding: "2px 8px",
            }}
          >
            Month
          </span>
          <IconButton size="small" className="arrowIcon">
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div>
        <main className="headerNav__inputWrapper">
          <span className="search__iconWrapper">
            <SearchIcon />
          </span>
          <TextField
            placeholder="Search"
            variant="outlined"
            size="small"
            className="headerNav__input"
          />
        </main>
      </div>
    </section>
  )
}

export default HeaderNav
