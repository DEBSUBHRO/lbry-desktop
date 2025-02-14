// @flow
import * as ICONS from 'constants/icons';
import * as PAGES from 'constants/pages';
import React from 'react';
import CreditAmount from 'component/common/credit-amount';
import Button from 'component/button';
import Icon from 'component/common/icon';

type Props = {
  balance: number,
  totalBalance: number,
  claimsBalance: number,
  supportsBalance: number,
  tipsBalance: number,
  rewards: Array<Reward>,
};

const WalletBalance = (props: Props) => {
  const { balance, claimsBalance, supportsBalance, tipsBalance, rewards } = props;
  const rewardTotal = rewards.reduce((acc, val) => acc + val.reward_amount, 0);

  return (
    <React.Fragment>
      <section className="section__flex-wrap">
        <div>
          <h2 className="section__title">{__('Available Balance')}</h2>
          <span className="section__title--large">
            {(balance || balance === 0) && <CreditAmount badge={false} amount={balance} precision={8} />}
          </span>

          <div className="section__actions">
            <Button button="inverse" label={__('Send Credits')} navigate={`$/${PAGES.WALLET_SEND}`} />
            <Button button="inverse" label={__('Your Address')} navigate={`$/${PAGES.WALLET_RECEIVE}`} />
          </div>
        </div>

        <div>
          <div className="section">
            <div className="section__flex">
              <Icon sectionIcon icon={ICONS.FEATURED} />
              <h2 className="section__title--small">
                <strong>
                  <CreditAmount badge={false} amount={rewardTotal} precision={8} />
                </strong>{' '}
                {__('Earned From Rewards')}
              </h2>
            </div>
          </div>

          <div className="section">
            <div className="section__flex">
              <Icon sectionIcon icon={ICONS.TIP} />
              <h2 className="section__title--small">
                <strong>
                  <CreditAmount badge={false} amount={tipsBalance} precision={8} />
                </strong>{' '}
                {__('Earned From Tips')}
              </h2>
            </div>
          </div>

          <div className="section">
            <div className="section__flex">
              <Icon sectionIcon icon={ICONS.LOCK} />
              <div>
                <h2 className="section__title--small">
                  <strong>{(claimsBalance + supportsBalance).toFixed(2)}</strong> {__('LBC Currently Staked')}
                </h2>
                <div className="section__subtitle">
                  <dl>
                    <dt>{__('Your Publishes')}</dt>
                    <dd>
                      <CreditAmount badge={false} amount={claimsBalance} precision={8} />
                    </dd>

                    <dt>{__('Your Supports')}</dt>
                    <dd>
                      <CreditAmount badge={false} amount={supportsBalance} precision={8} />
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default WalletBalance;
