import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { LoanItemInterface } from "../interfaces/LoanItemInterface";
import { styles } from "../styles/AppStyles";


const LoanScreen = ({navigation} : any) => {
    const loanList : Array<LoanItemInterface> = require('../services/GetLoansService.json');
    const LoanItem = (props: {loan: LoanItemInterface}) => {
        const {loan} = props;
        return (
            <View style={styles.topViewStyle}>
                <View style={styles.parentViewStyle}>
                    <View>
                        <Text style={styles.font18bold}>{loan.credit_type}</Text>
                        <Text style={[styles.lineHeight21, styles.graytextLeft]}>
                            {loan.loan_type}
                        </Text>
                        <Text style={styles.lineHeight21}>{loan.bank_name}</Text>
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
                        <Text style={styles.font18bold}>{`$${loan.total_amount}`}</Text>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={styles.grayTextRight}>Monthly Payment</Text>
                        <Text style={styles.boldTextRight}>{`$${loan.monthly_payment}`}</Text>
                    </View>
                </View>
                <View style={styles.parentViewStyle}>
                    <View>
                        <Text style={styles.graytextLeft}>Rate</Text>
                        <Text style={styles.font18bold}>{`${loan.rate}%`}</Text>
                    </View>
                    <View>
                        <Text style={styles.grayTextRight}>Period</Text>
                        <Text style={styles.boldTextRight}>{`${loan.period} months`}</Text>
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
                data={loanList}
                renderItem={({item}) => <LoanItem loan={item}/>}
                ListHeaderComponent={applyLoan}
            />
        </View>
    );
}

export default LoanScreen;