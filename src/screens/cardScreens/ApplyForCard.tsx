import { StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { RootState } from '../../redux/store/dev';
import { useSelector } from 'react-redux';
import { Wizard, WizardStepStates, } from 'react-native-ui-lib';
import { generalStyles } from '../utils/generatStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS } from '../../theme/theme';
import CardInfo from './ApplyForCardScreens/CardInfo';
import Features from './ApplyForCardScreens/Features';
import SelfRegistration from './ApplyForCardScreens/SelfRegistration';
import ProductRestriction from './ApplyForCardScreens/ProductRestriction';
import { ActivityIndicator } from '../../components/ActivityIndicator';


interface State {
    activeIndex: number;
    completedStepIndex?: number;
    allTypesIndex: number;
    toastMessage?: string;
}



const ApplyForCard = () => {

    const navigation = useNavigation<any>();
    const tabBarHeight = useBottomTabBarHeight();
    const { user, authToken } = useSelector((state: RootState) => state.user);
    const [loading, setLoading] = useState<boolean>(false)

    const [errors, setErrors] = useState<any>({})


    const [cardApplication, setCardApplication] = useState<any>({
        cardType: '',
        cardHolderName: '',
        cardHolderEmail: '',
        cardHolderMobile: '',
        cardHolderDob: '',
        idType: "",
        idNumber: '',
    });

    const [state, setState] = useState<State>({
        activeIndex: 0,
        completedStepIndex: undefined,
        allTypesIndex: 0,

    })


    const onActiveIndexChanged = (activeIndex: number) => {
        // Update the activeIndex in the state
        setState((prevState) => ({
            ...prevState,
            activeIndex,
        }));
    };



    const goToNextStep = () => {
        const { activeIndex: prevActiveIndex, completedStepIndex: prevCompletedStepIndex } = state;
        const reset = prevActiveIndex === 2;

        if (reset) {
        } else {
            const activeIndex = prevActiveIndex + 1;
            let completedStepIndex: number | undefined = prevCompletedStepIndex;

            if (!prevCompletedStepIndex || prevCompletedStepIndex < prevActiveIndex) {
                completedStepIndex = prevActiveIndex;
            }

            // Check if the activeIndex or completedStepIndex needs updating
            if (activeIndex !== prevActiveIndex || completedStepIndex !== prevCompletedStepIndex) {
                // Update the state to move to the next step
                setState((prevState: any) => ({
                    ...prevState,
                    activeIndex,
                    completedStepIndex,
                }));
            }
        }
    };


    const goBack = () => {
        const { activeIndex: prevActiveIndex } = state;
        const activeIndex = prevActiveIndex === 0 ? 0 : prevActiveIndex - 1;

        setState((prevState: any) => ({
            ...prevState,
            activeIndex,
        }));
    };


    const renderCurrentStep = () => {
        switch (state.activeIndex) {
            case 0:
                return <CardInfo
                    goToNextStep={goToNextStep}
                    errors={errors}
                    setErrors={setErrors}
                    cardApplication={cardApplication}
                    setCardApplication={setCardApplication}

                />
            case 1:
                return <Features
                    goToNextStep={goToNextStep}
                    errors={errors}
                    setErrors={setErrors}
                    cardApplication={cardApplication}
                    setCardApplication={setCardApplication}
                    goBack={goBack}


                />

            case 2:
                return <SelfRegistration
                    goToNextStep={goToNextStep}
                    errors={errors}
                    setErrors={setErrors}
                    cardApplication={cardApplication}
                    setCardApplication={setCardApplication}
                    goBack={goBack}
                />
            case 3:
                return <ProductRestriction
                    goToNextStep={goToNextStep}
                    errors={errors}
                    setErrors={setErrors}
                    cardApplication={cardApplication}
                    setCardApplication={setCardApplication}
                    goBack={goBack}
                />
            default:
                return null;
        }
    };

    const getStepState = (index: number) => {
        const { activeIndex, completedStepIndex } = state;
        let stepState = Wizard.States.DISABLED;

        if (completedStepIndex && completedStepIndex > index - 1) {
            stepState = Wizard.States.COMPLETED;
        } else if (activeIndex === index || completedStepIndex === index - 1) {
            stepState = Wizard.States.ENABLED;
        }

        return stepState;
    };


    return (
        <KeyboardAwareScrollView
            style={[{ flex: 1, width: '100%', }, generalStyles.ScreenContainer]}
            keyboardShouldPersistTaps="always"
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="always"
                contentContainerStyle={{ paddingBottom: tabBarHeight, marginHorizontal: 5 }}
            >
                {/* Wizard for your main steps */}
                <Wizard testID={'uilib.wizard'}
                    activeIndex={state.activeIndex} onActiveIndexChanged={onActiveIndexChanged}
                    containerStyle={{
                        marginHorizontal: 0,
                        marginVertical: 10,
                        borderRadius: 20,
                        backgroundColor: COLORS.primaryWhiteHex
                    }}
                    activeConfig={
                        {
                            color: COLORS.primaryWhiteHex,
                            state: WizardStepStates.ENABLED,
                            circleSize: 30,
                            circleBackgroundColor: COLORS.primaryBlackHex,
                            circleColor: COLORS.primaryBlackHex,


                        }

                    }

                >
                    <Wizard.Step
                        state={getStepState(0)}
                        label={'Card Info'}
                        enabled={true}

                    />
                    <Wizard.Step state={getStepState(1)} label={'Features'} />
                    <Wizard.Step state={getStepState(2)} label={'Register'} />
                    <Wizard.Step state={getStepState(2)} label={'Products'} />
                    <Wizard.Step state={getStepState(2)} label={'Summary'} />
                </Wizard>

                {/* Render the current step */}
                {renderCurrentStep()}
                {loading && <ActivityIndicator />}
            </ScrollView>
        </KeyboardAwareScrollView>
    )
}

export default ApplyForCard

const styles = StyleSheet.create({})