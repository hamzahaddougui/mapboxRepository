import styles from "./FilterView.module.css";

import { makeStyles } from "@material-ui/core/styles";

import { Container } from "@material-ui/core";
import FilterForm from "./FilterForm";
import PriorityForm from "./PriorityForm";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#FFF",
    height: "100vh",
    position: "absolute",
    top: "0px",
    bottom: "0px",
    right: "0px",
    left: "0px",
    zIndex: "2",
    display: props => (props.open ? "block" : "none"),
  },
}));

const steps = [
  {
    key: 1,
    title: "step 1",
    icon: "",
    content: <FilterForm />,
    header: {
      title: "Narrow down your Match",
      subtitle: (
        <div>
          Choose as many filters as you like.
          <br />
          You can always change them later
        </div>
      ),
    },
  },
  {
    key: 2,
    title: "step 2",
    icon: "",
    content: <PriorityForm />,
    header: {
      title: "Select your priorities",
      subtitle: "Make your result more accurate",
    },
  },
];

const FilterView = ({ open, setOpen, current, next, previous }) => {
  const classes = useStyles((open = { open }));

  return (
    <div className={classes.root} open={open}>
      <div className={styles.jumbo}>
        <div
          className={styles.backContainer}
          onClick={() => {
            if (current === 1) {
              setOpen(!open);
            } else if (current === 2) {
              console.log(previous());
            }
          }}
        >
          <img className={styles.backIcon} src="/back.svg" alt="backButton"></img>
          <div className={styles.backText}>Back</div>
        </div>

        <div className={styles.header}>
          <h2
            style={{
              fontSize: "25px",
              color: "#323643",
              fontWeight: "600",
              margin: "24px 0 8px 0",
            }}
          >
            {steps[current - 1].header.title}
          </h2>
          <div
            style={{
              fontSize: "16.02px",
              color: "#323643",
              fontWeight: "200",
              margin: "8px 0 24px 0 ",
              letterSpacing: "0.01071em",
            }}
          >
            {steps[current - 1].header.subtitle}
          </div>
        </div>
      </div>

      <div
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {steps[current - 1].content}
      </div>
    </div>
  );
};

export default FilterView;
