import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { generalStyles } from '../utils/generatStyles'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme'
import { useNavigation } from '@react-navigation/native';
import ArrowBack from '../../components/ArrowBack';
import { Dialog, PanningProvider } from 'react-native-ui-lib';
import { ActivityIndicator } from '../../components/ActivityIndicator'


const Index = () => {
    const tabBarHeight = useBottomTabBarHeight();

    const navigation = useNavigation<any>();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [card, setCard] = useState<any>("");
    const [loading, setLoading] = useState<boolean>(false)

    const onLinkCard = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            navigation.navigate('LinkedCard')
        }, 2000);

    }



    return (
        <KeyboardAwareScrollView
            style={[{ flex: 1, width: '100%', backgroundColor: COLORS.primaryOrangeHex }]}
            keyboardShouldPersistTaps="always"
        >
            {/* dailog */}
            <Dialog
                visible={isVisible}
                onDismiss={() => setIsVisible(false)}
                panDirection={PanningProvider.Directions.DOWN}
                containerStyle={{
                    backgroundColor: COLORS.primaryBlackHex,
                    justifyContent: "center",
                    // alignItems: "center",
                    borderRadius: 10
                }}
                height={250}>

                <View style={[generalStyles.formContainer]}>
                    <View>
                        <Text style={generalStyles.formInputTextStyle}>
                            Card Serial Number
                        </Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.formInput}
                            placeholder={'Enter your card  serail number'}
                            keyboardType='email-address'
                            placeholderTextColor={COLORS.secondaryGreyHex}
                            onChangeText={text => setCard(text)}
                            value={card}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        />
                    </View>

                </View>

                {loading && <ActivityIndicator />}

                <TouchableOpacity
                    activeOpacity={1}
                    style={generalStyles.loginContainer}
                    onPress={() => onLinkCard()}>
                    <Text style={generalStyles.loginText}>{'Proceed'}</Text>
                </TouchableOpacity>

            </Dialog>
            {/* dailog */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: tabBarHeight }}
                keyboardShouldPersistTaps="always"
            >
                <View>
                    <ArrowBack
                        styles={{
                            marginLeft: 20,
                            marginVertical: 15
                        }}
                    />
                </View>


                <Text style={styles.ScreenTitle}>
                    Explore Your {'\n'}Stabex Card
                </Text>

                <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                    <Text
                        style={[generalStyles.textStyle, { color: COLORS.primaryBlackHex }]}
                    >
                        Get access to additonal features once you link your card to your account with Stabex.
                    </Text>
                </View>

                <Image
                    source={{ uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAvwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAEAAMFBgECBwj/xABDEAACAQMDAQYDBAcECQUAAAABAgMABBEFEiExBhMiQVFhFHGBFSMykQczQlKhsdEkcpLBFlNic4KTouHwNENUY/H/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QALREAAgIBAwIEBgEFAAAAAAAAAAECAxEEEiExQRMUUWEFIjJCUpGhFUOB4fH/2gAMAwEAAhEDEQA/ACI7OW41WPvUdbdBnaeM0u2l7Hptz3MUOcxgg1HdnNfvL3UV+LZmUgigO12qte6msPG2Pw5q09PtWGGqKskoJ9WQkV26XBkMavnrupy4gkfE6ROQegUVkTaeuRc7y454oqPtBpsUYRWlwPSoRqskspFrKIVzcZzApYbuWPe6ugHTPlSh2pku5fHpR7dotNddrtMVPlQ41XQw2dkh+YpvL2v7SbrpXSZm21C5ncW0IdgegAoyHSLyUNJLC455I4xQ8GvaTavvgikB9QKLHba3VSAs2Ca3lru0RlGnvMNgtG0qMXcUTmUHBz6UFqeqyXUBRVkHqM9aTdtLZhtZHI96ZHa2yHK2p+oFbylz5waSo6bzfslqk1lcTK6uBIMBvMVcdO1TdA8Ju2eTORmqT/pdZggraYPyFY/0wtlbeloQ1N5S/wBDLwV95aNevHheNg5PqQaEg1WGONrn4KN2QZLtyTUA/bGB/wAVoW+ZrX/S6327fghj0zQlor2uhSN1EXlSLcvbFzYfFrbp3YONo604vameQR93bKe8GRz0qmDtZbqhUWKgenFYHbLbjZZpx0pf6bd6FfO1fkXeftPd27Kslsh3dDmq/q2p3N7KSUK+wqJftqzYzZocepomw7Q3moSMLXTUkZeoFNH4dcuWiVmrqlxuBnV+GO4Y8sVrqUjLZxPHHkkYOalln1mWTuxpC5IyAacKa45C/Z0XsDVFo7F6fsg50/k/0Vq8gSa3jDo3iXqBQBhSEgorllGACOKu/wAHrxXjToeOlVm9125t7iSGa0hDocMCKy0Vr6Y/ZNyp/IjFgaQq0hII5AFSVpqF9b/dJLtj8wDQp7QyZ4toc/3a0bW5jyIIhn/Zp1oLX/0Rzr9ToXZy1ga0a3utkU3SNjwaC7U6HaafbRy27GR943NuzmpGezhuAN4zjkEGhZNBNzHiOZ9mc4LcVOVrabfU9OvTqFsZJ8Ir876L3A77HekeKo0ydnwfX61Py9ifi5mJmVQOKitR7J2tlIEJLN580IXNRXLOjU3R3tqCfuCfFdnk/YzSGpaAv/sZ+lRl9Z2trerEYyUxyay1nBLG5hTbt9abxs/czm8w1/bj+iUGr6EOlqT/AMNI61oy9LEk/wB0U3Z6fbbY98QOetX7TdD0C5TalqpcKC1BW57s3mprtH9HN9T1Oyuotlvad2xPXFR4BPkc10W70WxhuHEdqgAOBxTEtrZWwDyRIq+pFVq+IKtbcNnLdTO+W54/wULunPRWrIilzgo1XsfBbw692E8xitVks7icLEin6VR/FH+JN6BpdSjPDInLowHvWinccLgn0q4dpWit7IP3YwGxwKr8ZtmUSwqASeaK+Iya6E3pUu4zBp13csRDCzEelbvo18iF3gKgetXfsg8a3Em4BsxnAFTaSW1xCY5IyQTg5FZfEJtZwMtLHPLOUjT5z0x+dSWjzappTytZBQ8mAWznFdhj7D6fNAjiCMbhnNRXaXsla6XpzXMCKGB8jTWaxuDMqq89Cpfanai4TiWNSR1HBpGftNI6q94gIHGDUhBE4tSwPQZqPkuZv32/KvPV9kuh0eDWurEJe0hLA6iV29earV7btPcPJPKWkJ8TY6mrtpEJuIj3jNuY4zRsn6PJZD3iXJ8fNdGmukm9zwSsrrWDmosE/wBb/wBNOx2MI/WSZ+ldAb9Hl8o8Nxx7imX7BamPwyofpXU7s/cBRqXb+P8AZanW170RiAcmsTpZWsckt191EvTnr8velcrBZxm8uZ8JHyT6+1UrXNXn1y9LP93AvhjjH7I/r71505qKKVVym/YdutbU3BNshWPJxk5NCyTQXTF5ZJlJ+tRNlKZBLHJ+tikIb+tH+HaMiuRzO5UrBHa3oUl7KJLG7hyB+CTKn8+aBh0bVkBjFsxJ4P3iAfnnFT8Ij7wDccn1qUiZFGCM/Oj4mOgVp0+5C2uk3+xY/hlBA5PfL/WrV2Z0l7GV5JrmNQ453PnFDLPwNpArDXrr+E0Fa4jvSQaJK+tlM/hvLYkngZbJ/wCmoTXLL7sJL1Dc1IWmoszd2fEG4w1M9oLmFrYEyJvRdvB601csy5I30qEflK1NB3E0QLDuzRlnAE1JfQrVU1C8l74fecA5GTVg0PWLUskly4DKPWuiUVtZxR3uSSDO1VsH0/bnjcM1T5bSJQojnkJz0C8VfbjWtOusQqQwJzzUZPNby7ljSNQDx05pIPgvZCUPqWGO9k7B0lkKyEsY+KnrIERfeMAQ3maH7HBH1Luy4XcpA96tidm7aJjJI7Mc59qG9R4Fe6fJarfd9lxbTg7Kpfbu9vItHVVXKl+TVlecwRRxbjgrgYqt9sbae40eRBI2CcjNO3lC14UsSIGDB0wFpFBK9M1FSTQxd2GkHB8XNNxdn79rQs8pVAvXNQlxaW0SkTXMjuegWhQ+cM6NVTFJbJZLhpuoWSIT36g54FTWp69qgNl9nESKVG/aM1VOzOhW11ZrM8jgZ5BroS2ltp0lt8MgjQxgc8jNUhlSeSVqrUI7Xz3Jye5lOiiTgShAWHvVdOuXKQI7pwxI6VYZIWWzml4KumQPKoKVibeImFPMYqU5NMmksFF1jUZdVuNsJKWqHwA+fuaaFskMakDGOT71vHGqAZHyrW4kwOK5pScup6UIKK4K/rCva3JvYPxgZdf3hXbuzPY/Rk0KzlvbKO5uJ4VkkeUbuWGcD0FcS1R8h+edpr0hpI2aRZDHS2jwP+EValJ9Tl1LccYIuTsr2bDhfse0Mg5AEWcUMuk9lp7lrRLOx79eNgXBz7ev0rbsxrkN0LiGdwL0yu+wkAyDyA+QGMe1RWr6HNFbnVLUSRjPeNDJw8XOevtXROOzjAumjG1tSlj0JO57I6GEZjbrCFGSQ+0AfWgJuyOj4VhdKqtypMowR6j1qfuUN9okLTRyu8gRiItu4Ec5weCPah57OabRoBcWMZuFlXwpGAdm/J46DI61uPQ0U/ul3wB6f2P0mDZNgSqfwsXyuf8AOjpez3ZqMhbjTtNV25AkRAT+fWt9bs7q6aO2so1ihiQyBj4Rv/Zxj05NB6xb31+1vL8HKrtaOjqqo21yR4Tny68jmg36IMYbsZl1/gIfROy0UohfT9JSU/hRo0DH6Vj7M7MRBnFppKKjbWbagCt6H0NMLZ3keqxTPZSFBDCjCIIyZGcjLc4Geopq9sbx9cGoR2LNbpMqtAWA7/j9b1xxngGtl+hlTDP1diUl0zTIYt6abaElgq4iUckgDn61DfamkEFo9FllUMV3w6ZM6kg4OGEZB5FWS7OYgT++hz/xiubz6XPLqNheyzX0H2VNIZIYpYTHKDMzLuJlGMggciqYRzt5XPJdbSS2e1hvrWwthHKu5HWIggYzz4eOnnTDdoYu+eKOynnZApYwWssiruUMAWCYzgg496go7y/Wy06z0lbH4oxLFK8rh+5chipG0kMQA3GR+Ic1G61okuv2l1EJ76SATxTm8spoGJKwKjB/HwepotIG72LzpeqR6gx22+1VkaJhJGyOjBQ2NrKPIiq92+uUgmt7MRj+0Rlsj1B/7ipTs7b3ELyPcW7wia7Z4xIylmTuVUE7SR+yarv6TWxrOjephl/mtJJfKEBhkV7drXa36vJIqGTRICRIkLuB1LVZEjVbEydDs609aWUk9sjo2Iynr1qTUpcoKltWADRhHFC0YTYucVb7YQfDokgWRQOM+VU+1BEVwN3KsarUXavULe+aCNyVU/tdKa1SaTQK3HPJ1x5GeIxBwEPAHtQjW0YAU7OOetc+03trfG4kW5RWXPgwcHFM3fajVJL5mW23ReXFQcZN8lvlQBJcq3CHj50LcT5HWnLyxSV924q3kV8qEi0u6lZhHOrAdQetRR3NsZ29/vGMgA5r0nYjbY2yjoIk4+leeZ7xNIgSCKDfI0edzDqfX869E2p/s0JPUxjP5V1UpHBqG2+VwVHW+xUlxfNc6dPHGJG3Mj5Gw+oIq0PatNaC1nYmMoElbzcef5+v/wC0XSrolOUlhnOngZmR/hJUg8L92e7wcYOOP8qE26iJDhhs3jAG3O3PP8MVI1igjZIxBquwb3jDANnaB+LK4+mN38Kwy6tllVlA2HxjbksDwce4z7VJ0qOfYxFyLqgdu6MYTx4zg+uPr+H265piaLVmHdiRSm1wWyATydp4HBxjp69KmTWhpkwA93jueP3lP/UK5rq2l2d4NUkXXLC2vri9Fx3cdqXiRosKq+5PdgsTkAk+HPNdKu//AE7Hgcr1+Yrnc9nqTX2myR6jqdhDZXk7z20UErJcKbhnHKkAgqffrQY+PlQz9sSTXh7NwWMEVzqNhHJbX1u/eKW3MNz4RMfhPp6Z54koZ7ya6kitZ9Ku8EJGscD2SbsZ+8HizzggYAPr5UHdvf2lkj2Gk3Q1AW8ZhuIFAfPezEpIW4CgMDjr4vaj9U0ltWeWC4RtPEqKGnt5t8ilFyh7wHxcqPYYxjJBGQMMm9AIEAiLwPNHcssrQq6gvs8Xhb8PPQZPGD51WP0o5GvaAceExXAJ8usdTPYyCeytzaXIffHcgpNNP3klyDGMu2Twc5GPLAFV39M1y1tc6EUQsWW4+mDFSz+kpCKk0pPAc2PsZun4DTunTOul22zG0J4qqH+lCJpQtu7LSFcEk8VFv2iuxbLDG21FGBih4iRHaywi7xBeOOPG1UNrlbmaaWPIYZ3itnurnawR2IY5IqJginaaVQGUv50fFTi0bw2pZDtKuhLdLjOQ2Oa6RYadHAUeRzsZfLmuaW9jJbZbccetWTSO2EulwCGZEmUfviuffLsVcE1yOvKjw71PXmtrGXY5YHrURBd4hmjyco2Kfhn+63MfeuU9PI3qjm8s4GU+NXZMn0Of6V6TgGLeIeiD+QrzJavvht1675Qf416Sk1CC1MML947lc7I4y5A9TjoK6qF1OHU9gylQR1W1Fx3G6TO8RlxG2wMf2d2MZ/zrRdZs273xSDu0dzmJhkIcNjjnGPKunDOUPpVHjWbNkDKZS2/Z3Xct3mcA/h69CDmtZtcsIoo5Wkk2OrNlYmO0KQG3ccYzzmthmJGlTLXcC3MFs0gE0ylkHqBjP86BOu2YNzuW5UWylpS1uwAA564rJMJJGtDQzajbrZSXkveRRJ171Cp/LrTMeqwySQRmK5jknkaONZYSuSF3H+ApkAMdQylWAIPUEZBpn4W28raHP+7FBQ67Zzy28USzu86llAi/CobbuPoMim17Q2e66EsV3CtqPvXkgIAPGAPUnIwPPNNg2WSXw1v/AKiL/AKz8PD5Qx9euwVFy9o7KG3mmuI7mAwFO8jkiw6hjhWxnkZ9M/KlJ2l04fF900k4tBH3jRKCCXOFAJIB9/SttfoHLJVYo0OVjQH2UCubfpnSUnRXjZQqi4DA9Tnuv6Grje9prSxijlura8SNoWmY92D3aKQCWwx9R0zVW/S9pR1KPR3yQsbzKWHlnZ/Sp2tQjloauE7ZqEerObpYSSv4ecjJ9BRiWUUC9Nzep6VJCJYohGowoFDTV41l7nLjhH2Om+FV6eOZcyI6cAZ8vkKe0JYLzUo7K6cRGU7UkxwT6H5/zoiz0m+1eSZNMt3naFN8oTGVX5eZ9B54qb1Hstpkdk+l28xbV54EvtLvWJHxIGN8IHkR5fMHnBqtcZNHna91Re3HJOWnZWwhAMi94w6+lES9m9LlUK1nHj+7QnYnX21ezktb5TFqlme7uI2GCfRseXoferOF9KzTTPN4OAszRahcxPxkg4p27n7qzJzjjb+dHa3ZCYLcwY71F8udy+Y+dQWoN3iRRryocVVJMLyg7Tfx2q9cOo/jXpSWxkknW5trkwOYwjgIG3Acjr0PX8684aUB8fbj/wCxP5iu0dpbbUZdVZraG5aPYoBjVsdPaqVy25wB0q2Si3gsjaUTKV+KkFs03fmDaMb87vxdcbhnFNJoUaCcLO26eKSJztHRiTn6ZPz4qlGw1f8A+Ne/4Won4HVfsG8j7i771poyo2tux4s4/hXRXY5PHQW7RquG5TTLgujQwJCbE/DSxZPeKud2QAd2evQfkKZn7PwzRIkksjMgfxlVJZmYNuOeOo6dMVzoaZr+4f2TUMZ/deui3FnPJdThIcCWEqZXK+E7cDaQc/THqatNOPfJxwSkOXGjie7F211L8QrIU2nwgL5behzlvzNK50tJ01FDO4W9UK2F/BgY4reyE5uHllt2hHcxxqrMpJI3Enwk8cj3qLt7K5jsLiKWxZ2crhfu2O4Agty2D8yQT6cUm5jqtPuH/ZUR0w2DyDbnKmJFj2HORgDjgjNMTaXNcJE0upTfEQSmWKcRp4cqVI24wRgmsLbSNe23e2B2xw7ZJVkUhiVwVOTuI+nXB8qwunSJo08MUaxTzku0aEALz+AEcdBtz9aKkzOuK7jZ7PwlNPiF04jtGDIdq7mYHdkNjIz546jiiJtJt5/tESSuVvHR2wQDGyABSD7bQai30u8YEiyCpJuEMRkX+yHcCG648s+HPpWW0q+y2LdSVYGU94B8YO9DY/w5Hix1x05rb5ehTwIfmgs6Gjhpry/muJmeF++cIMLG29VwMDGevrWLjs5YOk0EJ+HilhSPuolUABHLggH3Y1n4C4+y7aN7dZO6naRrbeMFCWwmTxxke3FBw6PfIVRgu87Stzv5gUIV2DzPJz9TW8SSBGmD+4JuNBtbiKIz3THuIzHHJ4E2HcGBGBgEFRjio79IaP8AZ9k2chJSGOMZJHFPrpN0EDmwh7tdqmz7xcOQhUvnGOpHXyHrReq6cZdBt7K6m3usaq0p58QUc/mKjqHKVTydGl2UaiFmc4Zy9uBjPTrUxofZs30tw18kx+HiEvwUS4mmU9CM4AHv/Kn+zkWmx6tNYa7axv3qmON3Y7Ub/v5Hyx70ZqnaTRLCzW4tdRe31nRZO7S2uAWeWM9Ydw/WKRghxnGFJPXPmUUr6mfQfFNdNPwq01nub9ntUsLHXItI1EW+malbIYori3ZTHPEw3d27DgSLwfmMjg80vtx23XUPgoLCLudU0u7lYajauO7fkjcns3UjpnPWo/tP2hl7QMIINPt7DS45Gkitooxyxzl2OOWOT7fOm+z/AGSvNakDQoIbQHxXDdPkvqa6d6XCPElQ388+pDaLqup2vaSLU7eSW4vHk3TbmyZQT493/npXYW166uPDZWch/wBpuK30TsrpekRBLeDc5/FLJyzH3/oKm0iReFQD6UkpZIqOHk5UbiFwQmEYclCeCfaqpr9oLVe9h/Vu4YD90+YqYMcQX9rrng45reZUuojFcbXQ/s4wR9aZcFJfMiM06ZYbiGZ8lUdWOPQEGvS9jqNpfWsVza3MUkLqGVlYV5xg02GFNgkkYeWSMitposAiHwk9TTwntZKyvekekzPCDzNH/jrBuIevfR/4xXl5tNMjfeyMST68UnsLJSiLGrM7dW5wBVvF9iLo9z0+bqAdZ4/+YKZm1GyhTdLdwIvqZABXnazSBSVSOMZAONo4omW87kYQ8+VDxn2Qy067s7ZP2o0xDiKVpvdFOPzNaQ9prKV9uHGfkf4VQtA0fvrdbnUppJN/SJWKgfOrNa/DWShbWzjjA8yBRTtfoOqqkWkXtswBFzEMjOCwBxWRd2+M/EQ4/wB4K51210lNf04StCj3cB3RELzjzHyqq2vZ6WLBmgCf3lx/Omlc49UKtOn3O4fF23lcQ/8AMFZFzbkgCeLJ/wBsVxsW1jENrOhYdVRdx/hRVkkyOHsLFt3k8i4x74pfM+wHpl6nXGliXO6RBj1YCmH1CyQ4e7t1PvKv9a56NH1O7bdeXbqp6qtHWvZ6xhO507xvVjmlera7A8uvUuq31o48FzC3piQGoPtUZ72OCDTpwoDFpJAeMeQHrSs4ra15FujKB+EijPiU2hDEWKqBnI8qWWo3xwGNShLJTbvsrNNFxOGlJ5MvIIoa37AQh/7ROh9oo8D+NX74tG/FB4c5GcY8v/PrWRcorbljCncScD2P9a5dizk7lrblFQ7IrFj2R0e0YMbXvnU/imORn5dP4VOIiooVUChR0HGB8qLW4jGC0QZsYJ9//BWRPHkExg+x8/Dj/KmwiM7Jz+oFAJ/CM+1bCiVuUVuI+AMDAGRQoGKD4FRxXrzTecHw8VsJQvB6CmmnUE1XAw5ub9402zkHr86ba4J6dKaeZm6UTG9xcsgJB8xn86ClmZbhWJ6Ky8fSnGjLhgecitEt5Jjg53AjP9aZE5M3imPeJluW8P16iiXDSRtjkg/nWbDR7q4xEsTF1PGASParRYdlr0jMiYOOmazwgroTvZnUo7rT44dw76MYKHrUrM6xAmaWOID95sVB2/ZTDK0iRqQc5Jyf4VKJoFoDlix8+OKbzCSwZQNI9UDzmDT4mnkI/WONqD/M0PB2daRt95O789M1NWtpDar9wmCfMnJola552OTKYS6AVrpVpbqNsIz60cqKn4Ris1tUzCpZxSAOa3AFYxqBxnyo60gR4ZHcgBI93OOaFwK3SR0QhSRkYPvTLAks44Co7YMHYyKiKMncuTz5CsRQoytudEwN3jxznPFAvLKuAuT65pxGY+dHKBh+oQqKw8LIvGcN/L6U9bwRPzJOI+h8WPPy5oQMwHXFLefUmsmFp4MyqFcgcj51rSJzSpWMcJYnFMnmsUquYSqDin40X0rNKigEhaWcUrAMCPkat2g6PYu5aSESFRxu5rNKls4QF1LJHEkaYRQPkK3BxwKVKuWLHFSFKlTGNlrYClSrGMms0qVYxkVsKVKmFMmsrSpVjGSKSUqVYJtSNYpUTGM1uOlKlQMf/9k=" }}
                    style={{
                        width: 300,
                        height: 300,
                        alignSelf: 'center',
                        borderRadius: 20
                    }}
                />

                {/* buttons area*/}
                <View style={generalStyles.flexStyles}>

                    <TouchableOpacity
                        style={[generalStyles.loginContainer,
                        styles.buttonCardStyles
                        ]}
                        onPress={() => setIsVisible(true)}

                    >
                        <Text style={[generalStyles.loginText, { color: COLORS.primaryWhiteHex }]}>{'Link Card'}</Text>
                    </TouchableOpacity>

                    {/* button */}

                    <TouchableOpacity
                        style={[generalStyles.loginContainer, styles.buttonCardStyles]}
                    // onPress={createProduct}

                    >
                        <Text style={[generalStyles.loginText, { color: COLORS.primaryWhiteHex }]}>
                            {'Apply Now'}
                        </Text>
                    </TouchableOpacity>
                    {/* button */}

                </View>
                {/* buttons area */}



            </ScrollView>
        </KeyboardAwareScrollView>
    )
}

export default Index

const styles = StyleSheet.create({
    ScreenTitle: {
        fontSize: FONTSIZE.size_28,
        fontFamily: FONTFAMILY.poppins_semibold,
        color: COLORS.primaryBlackHex,
        paddingLeft: SPACING.space_30,
    },
    buttonCardStyles: {
        width: "40%",
        marginHorizontal: 20,
        backgroundColor: COLORS.primaryBlackHex,
    },
    formInput: {
        color: COLORS.primaryWhiteHex,
        fontSize: 15,
        borderWidth: 0.4,
        borderColor: COLORS.primaryLightGreyHex,
        borderRadius: 10,
    },
})