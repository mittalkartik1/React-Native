import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { styles } from "../styles/AppStyles";

const UpcomingPaymentScreen = () => {
    const PaymentItem = () => {
        return (
            <View style={styles.topViewStyle}>
                <View style={styles.parentViewStyle}>
                    <View>
                        <Text style={{ fontSize: 21 }}>$363.00</Text>
                        <Text>Credit Loan</Text>
                    </View>
                    <View
                        style={{
                            borderRadius: 15,
                            paddingHorizontal: 12,
                            paddingVertical: 4,
                            backgroundColor: '#2C50FF',
                        }}>
                        <Text style={{ color: 'white' }}>Pay Bill</Text>
                    </View>
                </View>
                <View
                    style={{ height: 1, backgroundColor: '#e6e6e6', marginVertical: 10 }}
                />
                <View style={styles.parentViewStyle}>
                    <View style={{ flex: 1 }}>
                        <Text>Repayment date: 22/08/2022</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ textAlign: 'right' }}>Interest payable: $63.00</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={() => <PaymentItem />}
            />
        </View>
    );
}

export default UpcomingPaymentScreen;