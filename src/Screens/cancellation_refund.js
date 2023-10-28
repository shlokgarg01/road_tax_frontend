import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Heading from '../Components/heading';

const CancellationRefund = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{padding: 10, flex: 1}}
        contentContainerStyle={{paddingBottom: 20}}>
        <Heading title="Cancellation and Refund Policy for Road Tax Seva" />
        <Heading title="1. Cancellation Policy" />
        <View style={styles.container}>
          <Text style={styles.text}>
            1.1. Cancellation Requests: Users may request cancellations of
            services provided through the Road Tax Seva Application. The
            eligibility for cancellations and the associated terms may vary
            depending on the specific service and its requirements.
          </Text>
          <Text style={styles.text}>
            1.2. Cancellation Process: To request a cancellation, users must
            follow the cancellation process outlined in the Application or
            contact our customer support. We may require specific information to
            process your cancellation request.
          </Text>
          <Text style={styles.text}>
            1.3. Cancellation Fees: Cancellation fees may apply depending on the
            service and the timing of the cancellation request. Users will be
            informed of any applicable cancellation fees before confirming their
            cancellation.
          </Text>
        </View>
        <Heading title="2. Refund Policy" />
        <View style={styles.container}>
          <Text>
            2.1. Refund Eligibility: Refunds are provided in accordance with the
            specific refund policies associated with each service offered
            through the Application. Users should review the service-specific
            refund policy for details on eligibility.
          </Text>
          <Text style={styles.text}>
            2.2. Refund Process: To request a refund, users must follow the
            refund process outlined in the Application or contact our customer
            support at [Contact Information]. We may require specific
            information to process your refund request.
          </Text>
          <Text>
            2.3. Refund Timelines: Refunds will be processed within a reasonable
            timeframe, and the time it takes to receive the refund may vary
            depending on the payment method and financial institutions involved.
          </Text>
        </View>
        <Heading title="3. Service-Specific Refund Policies" />
        <View style={styles.container}>
          <Text style={styles.text}>
            3.1. Road Tax Payments: Refund eligibility for road tax payments is
            subject to the policies of the relevant government authorities. We
            will facilitate refunds in accordance with the government's
            guidelines and timelines
          </Text>
          <Text style={styles.text}>
            3.2. Application Fees: Application fees or processing fees may be
            non-refundable unless otherwise specified.
          </Text>
        </View>
        <Heading title="4. Contact Information" />
        <View style={styles.container}>
          <Text style={styles.text}>
            If you have questions or need assistance regarding cancellations or
            refunds, please contact our customer support.
          </Text>
        </View>

        <Heading title="5. Changes to this Policy" />
        <View style={styles.container}>
          <Text style={styles.text}>
            We may update this Cancellation and Refund Policy from time to time.
            Any changes will be effective upon posting on the Application. We
            encourage users to review this policy periodically for any updates.
          </Text>
        </View>
        <Heading title="6. Governing Law and Jurisdiction" />
        <View style={styles.container}>
          <Text style={styles.text}>
            This Cancellation and Refund Policy are governed by and construed in
            accordance with the laws of [Jurisdiction]. Any disputes arising
            from or related to this policy shall be subject to the exclusive
            jurisdiction of the courts.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {textAlign: 'justify', paddingBottom: 5},
  container: {paddingHorizontal: 17},
});

export default CancellationRefund;
