import _ from "lodash";

const formValidation = ({ dispatch, getState }) => next => async action => {
  next(action);
  if (action.type !== "step/validateStep" && action.type !== "step/invalidateStep") {
    const {
      modules: { step },
    } = getState();
    const currentStep = step.list.filter(s => s.name === step.currentStep)[0];
    const { forms } = currentStep;
    if (forms && forms.length) {
      if (currentStep.formsRequired === "any") {
        let shouldReturn = false;
        forms.forEach(form => {
          if (form.schema && form.schema.required && isTruthy(form.data)) {
            shouldReturn = true;
            return dispatch({ type: "step/validateStep" });
          }
        });
        if (!shouldReturn) return dispatch({ type: "step/invalidateStep" });
      }
      if (currentStep.formsRequired === "all") {
        forms.forEach(form => {
          if (form.schema && form.schema.required)
            if (!isTruthy(form.data)) return dispatch({ type: "step/invalidateStep" });
        });
      }
    }
  }
};

function isTruthy(variable) {
  if (Array.isArray(variable)) return Boolean(variable.length);
  else if (typeof variable === "object") return !_.isEmpty(variable);
  else return Boolean(variable);
}

export default formValidation;
