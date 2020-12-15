import React from 'react';
import { Text, TextContent, TextList, TextListItem, ClipboardCopy } from '@patternfly/react-core';

import * as Cm from '../../../addSourceWizard/hardcodedComponents/gcp/costManagement';
import mount from '../../__mocks__/mount';
import FormRenderer from '../../../sourceFormRenderer';

describe('Cost Management Google steps components', () => {
    it('Project', () => {
        const wrapper = mount(<Cm.Project />);

        expect(wrapper.find(TextContent)).toHaveLength(1);
        expect(wrapper.find(Text)).toHaveLength(1);
    });

    it('Assign access', () => {
        const wrapper = mount(<Cm.AssignAccess />);

        expect(wrapper.find(TextContent)).toHaveLength(1);
        expect(wrapper.find(Text)).toHaveLength(1);
        expect(wrapper.find(TextList)).toHaveLength(1);
        expect(wrapper.find(TextListItem)).toHaveLength(4);
        expect(wrapper.find(ClipboardCopy).props().children).toEqual('billing-export@red-hat-cost-management.iam.gserviceaccount.com');
    });

    it('Dataset', () => {
        const wrapper = mount(<FormRenderer
            onSubmit={jest.fn()}
            schema={{ fields: [{
                name: 'field',
                component: 'description',
                Content: Cm.Dataset
            }] }}
            initialValues={{
                authentication: {
                    password: 'some-project-id'
                }
            }}
        />);

        expect(wrapper.find(TextContent)).toHaveLength(1);
        expect(wrapper.find(Text)).toHaveLength(1);
        expect(wrapper.find(TextList)).toHaveLength(1);
        expect(wrapper.find(TextListItem)).toHaveLength(4);

        expect(wrapper.find(TextListItem).first().text()).toEqual('From the GCP BigQuery console, select your project (some-project-id).');
    });

    it('Billing export', () => {
        const wrapper = mount(<Cm.BillingExport />);

        expect(wrapper.find(TextContent)).toHaveLength(1);
        expect(wrapper.find(Text)).toHaveLength(1);
        expect(wrapper.find(TextList)).toHaveLength(1);
        expect(wrapper.find(TextListItem)).toHaveLength(4);
    });
});
