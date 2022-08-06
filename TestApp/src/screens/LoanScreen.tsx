import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/AppStyles";

const LoanScreen = ({navigation} : any) => {

    const LoanItem = () => {
        return (
            <View style={styles.topViewStyle}>
                <View style={styles.parentViewStyle}>
                    <View>
                        <Text style={styles.font18bold}>Simple Credit</Text>
                        <Text style={[styles.lineHeight21, styles.graytextLeft]}>
                            Cash Loan
                        </Text>
                        <Text style={styles.lineHeight21}>Bank of America</Text>
                    </View>
                    <Image
                        style={{ height: 60, width: 60 }}
                        source={{ uri: 'https://logodix.com/logo/963677.png' }}
                    />
                </View>
                <View
                    style={{ height: 1, backgroundColor: '#e6e6e6', marginVertical: 10 }}
                />
                <View style={styles.parentViewStyle}>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={styles.graytextLeft}>Amount</Text>
                        <Text style={styles.font18bold}>$50 000</Text>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={styles.grayTextRight}>Monthly Payment</Text>
                        <Text style={styles.boldTextRight}>$1177</Text>
                    </View>
                </View>
                <View style={styles.parentViewStyle}>
                    <View>
                        <Text style={styles.graytextLeft}>Rate</Text>
                        <Text style={styles.font18bold}>13.00%</Text>
                    </View>
                    <View>
                        <Text style={styles.grayTextRight}>Period</Text>
                        <Text style={styles.boldTextRight}>18 months</Text>
                    </View>
                </View>
            </View>
        );
    }

    const applyLoan = () => {
        return (
            <TouchableOpacity style={{ width: '100%' }} onPress={() => navigation.navigate('LoanFormScreen')}>
                <View style={styles.fullButtonStyle}>
                    <Text style={{ color: 'white' }}>Apply Loan</Text>
                </View>
            </TouchableOpacity>

        );
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={() => <LoanItem />}
                ListHeaderComponent={applyLoan}
            />
        </View>
    );
}

export default LoanScreen;