import { useState } from 'react';

import styles from './FilterForm.module.css';

const FilterForm = () => {

    const [checked, setChecked] = useState(false);

    return (
        <div>
            <div className={ checked ? styles.checkyButtonActive : styles.checkyButton } onClick={()=>{setChecked(!checked)}}>
                Test
            </div>
        </div>
    )
}

export default FilterForm
