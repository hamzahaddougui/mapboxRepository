import React from "react";

export const dispatchAction = ({ dispatch, module, action, payload }) => {
  // console.log(`../modules/${module}/${module}Service`, action, payload);
  import(`../modules/${module}/${module}Service`).then(service =>
    dispatch(service[action](payload)),
  );
};

export const getIcon = name => {
  // console.log(`../modules/${module}/${module}Service`, action, payload);
  import(`../assets/icons/${name}.svg`).then(Icon => <Icon />);
};

// export const renderComponent = ({ module, action, payload }) => {
//   import(`../modules/${module}/${module}`).then(Component => <Component /> );
// };

export const handleAction = ({ dispatch, module, actions, event, target, params }) => {
  event && event.preventDefault && event.preventDefault();
  const action = actions.filter(
    action => (!target || action.target === target) && (!event || event.type === action.eventType),
  )[0];

  action &&
    action.process.forEach(process =>
      dispatchAction({
        dispatch,
        module,
        action: process.name,
        payload: process.params ? { ...process.params, ...params } : params ? params : undefined,
      }),
    );
};