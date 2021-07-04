// Third Party
import React, { useState } from 'react';
import { makeStyles, Grid, Typography, OutlinedInput, InputAdornment, TextField, Button, Divider, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

// Assets
import muiStyles from './AccountSettingsStyles';

const useStyles = makeStyles(muiStyles);

const AccountSettings = () => {
    const classes = useStyles();

    const [values, setValues] = useState({
        firstName: "User first name",
        lastName: "User last name",
        email: "mailuser@mail.com",
        mobilePhone: "+00000000",
        address: "1805 Scott St San Francisco, CA 94115 1805 Scott St",
        currentpassword: "nomadpassword123",
        newpassword: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false
    })

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    // const handleClickShowPassword = (prop) => () => {
    //     setShowPassword({ ...showPassword, [prop]: !showPassword.prop });
    // };

    const handleClickShowCurrentPassword = () => {
        setShowPassword({ ...showPassword, current: !showPassword.current });
    };

    const handleClickShowNewPassword = () => {
        setShowPassword({ ...showPassword, new: !showPassword.new });
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
        <Grid container direction="column">

            {/* First Section */}

            <Grid item container direction="column" className={classes.sectionContainer}>
                <Typography className={classes.sectionTitle}>Profile</Typography>
                <Grid item container direction="row" className={classes.sectionContent}>

                    <Grid item container direction="column" className={classes.fitToContentContainer}>
                        <Grid item className={classes.thumbnailImageContainer}>
                            <img src="/avatar.svg" alt="Nomadville avatar" className={classes.thumbnailImage} />
                        </Grid>
                        <Grid item container direction="row" justify="center" className={classes.editPhotoWrapper}>
                            <Grid item>
                                <img src="/editPhoto.svg" alt="Edit Picture icon" className={classes.editPhotoIcon} />
                            </Grid>
                            <Grid item>
                                <Typography className={classes.editPhotoTxt}>Edit photo</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item container direction="column" className={classes.nameInputsContainer} >
                        <Grid item container direction="column">
                            <Grid item className={classes.inputLabelContainer}>
                                <Typography className={classes.inputLabelTxt}>First name</Typography>
                            </Grid>
                            {/* <OutlinedInput
                                className={classes.firstNameInputField}
                                id="outlined-adornment-weight"
                                value={values.firstName}
                                onChange={handleChange('firstName')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Typography className={classes.inputLabelTxt}>Edit</Typography>
                                    </InputAdornment>
                                }
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                'aria-label': 'weight',
                                }}
                                labelWidth={0}
                            /> */}
                            <Grid item className={classes.normalInputSize}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                inputProps={{className: classes.input}}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                          <Button className={classes.inputButton}>Edit</Button>
                                        </InputAdornment>
                                    ),
                                }}
                                className={classes.MuiInput}
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange('firstName')}
                                autoComplete="fname"
                                placeholder="First name"
                            />
                            </Grid>
                        </Grid>

                        <Grid item container direction="column" className={classes.inputSpaceMargin} >
                            <Grid item className={classes.inputLabelContainer}>
                                <Typography className={classes.inputLabelTxt}>Last name</Typography>
                            </Grid>
                            <Grid item className={classes.normalInputSize}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    inputProps={{className: classes.input}}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                            <Button className={classes.inputButton}>Edit</Button>
                                            </InputAdornment>
                                        ),
                                    }}
                                    className={classes.MuiInput}
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange('lastName')}
                                    autoComplete="lname"
                                    placeholder="Last name"
                                />
                            </Grid>
                        </Grid>

                        <Grid item container direction="row" className={classes.inputSpaceMargin}>
                            <Grid item>
                                <Button className={classes.saveButton}>Save</Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.cancelButton}>Cancel</Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>

            <Divider className={classes.sectionDivider} />

            {/* Second Section */}

            <Grid item container direction="column" className={classes.sectionContainer}>
                <Typography className={classes.sectionTitle}>Contact info</Typography>
                <Grid item container direction="column" className={classes.sectionContent}>
                    <Grid item container direction="row" className={classes.contactContainer}>

                        <Grid item container direction="column" className={classes.fitToContentContainer}>
                            <Grid item container direction="row" alignItems="center" justify="space-between" className={classes.doubleLabelContainer}>
                                <Grid item>
                                    <Typography className={classes.inputLabelTxt}>E-mail</Typography>
                                </Grid>
                                <Grid item container direction="row" alignItems="center" style={{width: "fit-content"}}>
                                    <Grid item>
                                        <Typography className={classes.verifiedTxt} style={{textDecoration: "underline"}}>Not verified</Typography>
                                    </Grid>
                                    <Grid item>
                                        <img src="/notVerified.svg" alt="Not verified icon" className={classes.verifiedIcon} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    inputProps={{className: classes.input}}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                            <Button className={classes.inputButton}>Edit</Button>
                                            </InputAdornment>
                                        ),
                                    }}
                                    className={classes.MuiInput}
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    autoComplete="email"
                                    placeholder="Email"
                                />
                            </Grid>
                        </Grid>

                        <Grid item container direction="column" className={classes.PhoneInputsContainer}>
                            <Grid item container direction="row" alignItems="center" justify="space-between" className={classes.doubleLabelContainer}>
                                <Grid item>
                                    <Typography className={classes.inputLabelTxt}>Phone number</Typography>
                                </Grid>
                                <Grid item container direction="row" alignItems="center" style={{width: "fit-content"}}>
                                    <Grid item>
                                        <Typography className={classes.verifiedTxt}>Verified</Typography>
                                    </Grid>
                                    <Grid item>
                                        <img src="/verified.svg" alt="Verified icon" className={classes.verifiedIcon} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="mobilePhone"
                                    inputProps={{className: classes.input}}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                            <Button className={classes.inputButton}>Edit</Button>
                                            </InputAdornment>
                                        ),
                                    }}
                                    className={classes.MuiInput}
                                    name="mobilePhone"
                                    value={values.mobilePhone}
                                    onChange={handleChange('mobilePhone')}
                                    autoComplete="phone"
                                    placeholder="Mobile Phone Number"
                                />
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item container direction="column" className={classes.inputSpaceMargin} >
                        <Grid item className={classes.inputLabelContainer}>
                            <Typography className={classes.inputLabelTxt}>Address</Typography>
                        </Grid>
                        <Grid item className={classes.addressInputContainer}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                multiline={true}
                                id="address"
                                inputProps={{className: classes.input}}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                        <Button className={classes.inputButton}>Edit</Button>
                                        </InputAdornment>
                                    ),
                                }}
                                className={classes.MuiInput}
                                name="address"
                                value={values.address}
                                onChange={handleChange('address')}
                                autoComplete="address"
                                placeholder="Address"
                            />
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item container direction="row" className={classes.inputSpaceMargin}>
                    <Grid item>
                        <Button className={classes.saveButton}>Save</Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.cancelButton}>Cancel</Button>
                    </Grid>
                </Grid>

            </Grid>

            <Divider className={classes.sectionDivider} />

            {/* Third Section */}

            <Grid item container direction="column" className={classes.sectionContainer}>
                <Typography className={classes.sectionTitle}>Password</Typography>
                <Grid item container direction="column" className={classes.sectionContent}>

                <Grid item container direction="column" className={classes.fitToContentContainer}>
                        <Grid item className={classes.inputLabelContainer}>
                            <Typography className={classes.inputLabelTxt}>Current Password</Typography>
                        </Grid>
                        <Grid item className={classes.normalInputSize}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                type={showPassword.current ? 'text' : 'password'}
                                id="currentPassword"
                                inputProps={{className: classes.input}}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton
                                            aria-label="toggle current password visibility"
                                            onClick={handleClickShowCurrentPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {showPassword.current ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                className={classes.MuiInput}
                                name="currentPassword"
                                value={values.currentPassword}
                                onChange={handleChange('currentPassword')}
                                placeholder="Current Password"
                            />
                        </Grid>
                    </Grid>

                    <Grid item container direction="row" className={classes.inputSpaceMargin}>

                        <Grid item container direction="column" className={classes.fitToContentContainer}>
                            <Grid item>
                                <Typography className={classes.inputLabelTxt}>New Password</Typography>
                            </Grid>
                            <Grid item className={classes.normalInputSize}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    type={showPassword.new ? 'text' : 'password'}
                                    id="newPassword"
                                    inputProps={{className: classes.input}}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton
                                                aria-label="toggle new password visibility"
                                                onClick={handleClickShowNewPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                >
                                                {showPassword.new ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    className={classes.MuiInput}
                                    name="newPassword"
                                    value={values.newPassword}
                                    onChange={handleChange('newPassword')}
                                    placeholder="New Password"
                                />
                            </Grid>
                        </Grid>

                        <Grid item container direction="column" className={classes.confirmPasswordContainer}>
                            <Grid item>
                                <Typography className={classes.inputLabelTxt}>Confirm New Password</Typography>
                            </Grid>
 
                            <Grid item className={classes.normalInputSize}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    type={showPassword.new ? 'text' : 'password'}
                                    id="confirmNewPassword"
                                    inputProps={{className: classes.input}}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton
                                                aria-label="toggle new password visibility"
                                                onClick={handleClickShowNewPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                >
                                                {showPassword.new ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    className={classes.MuiInput}
                                    name="confirmNewPassword"
                                    value={values.confirmPassword}
                                    onChange={handleChange('confirmPassword')}
                                    placeholder="Confirm New Password"
                                />
                            </Grid>
                        </Grid>

                    </Grid>

                    

                </Grid>

            </Grid>

            <Grid item container direction="column" className={classes.innerSectionContainer}>
                <Typography className={classes.sectionTitle}>Reset Password</Typography>
                <Grid item container direction="column" className={classes.sectionContent}>
                    <Typography className={classes.sectionSubTitle}>If you just forgot your password, don’t worry – we got you!</Typography>
                    <Grid item container direction="row" alignItems="center" className={classes.inputSpaceMargin}>
                        <Grid item>
                            <img src="/resetPassword.svg" alt="Reset Password icon" className={classes.resetPasswordIcon} />
                        </Grid>
                        <Grid item>
                            <Typography className={classes.inputLabelTxt}>Reset Password</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className={classes.inputSpaceMargin}>
                    <Grid item>
                        <Button className={classes.saveButton}>Save</Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.cancelButton}>Cancel</Button>
                    </Grid>
                </Grid>

            </Grid>

            <Divider className={classes.sectionDivider} />

            {/* Fourth Section */}

            <Grid item container direction="column" className={classes.lastSectionContainer}>
                <Typography className={classes.sectionTitle}>Delete my account</Typography>
                <Grid item container direction="column" className={classes.sectionContent}>
                    <Button className={classes.deleteAccountButton}>Delete my account</Button>
                </Grid>

            </Grid>

        </Grid>
    )
}

export default AccountSettings
