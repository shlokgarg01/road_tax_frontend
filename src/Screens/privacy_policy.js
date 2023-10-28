import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Heading from '../Components/heading';

const PrivacyPolicy = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{padding: 10, flex: 1}}
        contentContainerStyle={{paddingBottom: 20}}>
        <Heading title="Privacy Policy for Road Tax Seva Application" />
        <Heading title="1. Introduction" />
        <View style={styles.container}>
          <Text style={styles.text}>
            Welcome to the Road Tax Seva Application ("Application") provided by
            Krishna Motors. We are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            personal data when you use our Application.
          </Text>
          <Text style={styles.container}>
            By accessing or using our Application, you consent to the practices
            described in this Privacy Policy. If you do not agree with this
            Privacy Policy, please do not use our Application.
          </Text>
        </View>
        <Heading title="2. Information We Collect" />
        <View style={styles.container}>
          <Text>
            2.1. Personal Information: We may collect personal information, such
            as your name, contact information, government-issued identification
            numbers, and vehicle details, when you use our Application.
          </Text>
          <Text style={styles.text}>
            2.2. Usage Information: We may collect information about how you use
            the Application, including your interactions with the features and
            functionalities.
          </Text>
          <Text style={styles.text}>
            2.3. Device Information: We may collect information about the device
            you use to access the Application, including the device's unique
            identifier, operating system, and browser type.
          </Text>
        </View>
        <Heading title="3. How We Use Your Information" />
        <View style={styles.container}>
          <Text style={styles.text}>
            We use the collected information for the following purposes:
          </Text>
          <Text style={styles.text}>
            3.1. Providing Services: To provide the services offered through the
            Application, including processing road tax payments and related
            transactions.
          </Text>
          <Text style={styles.text}>
            3.2. Communication: To communicate with you, respond to your
            inquiries, and send important updates and notifications.
          </Text>
          <Text style={styles.text}>
            3.3. Improvement: To analyze usage patterns, troubleshoot issues,
            and improve the functionality and performance of the Application.
          </Text>
        </View>
        <Heading title="4. Disclosure of Your Information" />
        <View style={styles.container}>
          <Text style={styles.text}>
            We may disclose your personal information to the following entities:
          </Text>
          <Text style={styles.text}>
            4.1. Government Authorities: We may share your information with
            relevant government authorities for compliance with road tax
            regulations.
          </Text>
          <Text style={styles.text}>
            4.2. Service Providers: We may engage third-party service providers
            to assist us in delivering services, and we may share your
            information with them as necessary.
          </Text>
          <Text style={styles.text}>
            4.3. Legal Compliance: We may disclose your information as required
            by law, regulation, or legal process.
          </Text>
        </View>
        <Heading title="5. Data Security" />
        <View style={styles.container}>
          <Text style={styles.text}>
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, alteration, or destruction.
            However, no data transmission over the internet or storage system
            can be guaranteed as completely secure. Therefore, we cannot ensure
            or warrant the security of any information you transmit to us.
          </Text>
        </View>
        <Heading title="6. Your Choices" />
        <View style={styles.container}>
          <Text style={styles.text}>You may have the following rights:</Text>
          <Text style={styles.text}>
            6.1. Access and Correction: You have the right to access and correct
            your personal information stored with us.
          </Text>
          <Text style={styles.text}>
            6.2. Withdraw Consent: You can withdraw your consent to our
            processing of your personal information at any time.
          </Text>
          <Text style={styles.text}>
            6.3. Deletion: You can request the deletion of your personal
            information from our records.
          </Text>
          <Text style={styles.text}>
            To exercise these rights or for any inquiries regarding your
            personal information, please contact us using the information
            provided in Section 9.
          </Text>
        </View>
        <Heading title="7. Changes to this Privacy Policy" />
        <View style={styles.container}>
          <Text style={styles.text}>
            We may update this Privacy Policy from time to time. The updated
            Privacy Policy will be effective upon posting on the Application. We
            encourage you to review this Privacy Policy periodically for any
            changes.
          </Text>
        </View>
        <Heading title="8. Contact Information" />
        <View style={styles.container}>
          <Text style={styles.text}>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the handling of your personal information, please
            contact us at:
          </Text>
          <Text style={styles.text}>[Your Contact Information]</Text>
        </View>
        <Heading title="9. Governing Law and Jurisdiction" />
        <View style={styles.container}>
          <Text style={styles.text}>
            This Privacy Policy is governed by and construed in accordance with
            the laws. Any disputes arising from or related to this Privacy
            Policy shall be subject to the exclusive jurisdiction of the courts.
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

export default PrivacyPolicy;
