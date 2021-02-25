import CheckyButton from '../../../common/CheckyButton/CheckyButton';

const Form = () => {
    return (
        <div>
           {/* <CheckyButton
           options={[
          { label: "Low Income Tax", value: "low_income_tax" },
          { label: "Low Living Costs", value: "low_living_costs" },
          { label: "Text Text Txt", value: "text_text_txt" },
            ]}
            onClick={console.log(() => {console.log('Clicked')})}  /> */}
            {/* <CheckyButton active={true} option={"Test"} /> */}
            <CheckyButton active={true} option={"Test"}></CheckyButton>
        </div>
    )
}

export default Form
