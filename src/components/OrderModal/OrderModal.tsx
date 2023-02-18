import React from 'react';
import { IOrderModal } from './OrderModal.interface';
import { Overlay, ModalBody, OrderDetails } from './OrderModal.styles';
import CloseIcon from '../../assets/images/close-icon.svg';
import { IconsRequests } from '../../common/IconsRequest';
import { StatusName } from '../../common/StatusName';

export const OrderModal = ({ visible, order }: IOrderModal) => {
  if (!visible || !order) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order?.table}</strong>
          <button type="button">
            <img src={CloseIcon} alt="icone de fechar" />
          </button>
        </header>
        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            {IconsRequests(order.status)}
            <strong>{StatusName(order.status)}</strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>
          {order?.products.map(({ _id, product, quantity }) => (
            <div className="item" key={_id}>
              <img
                src={'https://lh3.googleusercontent.com/fife/AMPSemdUrMTopSCwGv99Gb0jwFJWadUp3mimi7f0BP_kcGCrqPOoE_W_iY3KPGCiIOtOK8I9p3nkGf8qIzBGsOB4IkimkhFtHR9LtizcAs8CAKoYHLDCSvk2aWA_g5dA97tsfE6UUGEzEa4WwRepM6eLF81NiU9lc4sVy7EnNbo--cq5vsy_pJRryQq9D_8_oVqy4bQvVDOZtIwakndQRR4170MXrVKjo4hJH1f6szmzUp_qDc4K65Bop-E5kUa4bol0_MDsyNv2MnlFOy5J0DEUHdrxe0BY9N4Q87f3_X0iPvmYpcp9zqg_YJdR0V8B1QmmHq0vjO6t5Hmxj_EYqayRuHwn0lsEpXeHlddFVuZd2Nd0T3VBnwJQqqErMp2BvPwYY0mQOjU234ZKM38ouNuGAdzWYqmoLEfsQ8OqwXnBKe1suAi7VcKGitmNTAmijAzspSSOQAiI8ILxqOIixWB2QOMVE9JO2N8ksW40gk5NOJDhpnUDzqP0EGbEQtX7I0oEYBV2BFJK9sxxEBouDM4LaTeLBxMOCueZ7L7tNHQfS-QUTXQawhBi9rB-WMMMLpVpNWSdMJL73cHEWXOZe-4yJ2ObkCBjrUTpMphmJT0XbR6aCH-yts6CVsyes3WjS-6qhAHzjEqvD_QkGyzk8bIxGph8Z88itN5jf2XFEXX50kSsvbCb0ZIxRO9UOPT_V9oJVLUgFjAORfp3C9VLUS0CqwQGiNBsTXm7waQwBiqjscvQ8KZiy6_wqoEK3I5_rlyCjbdeS3jBKQBwlXuNdf-07Y4QRVtzToFAaOfOR1Fqryt7McSuUe1xe0DbbFIZuJe2-ypFVr2bDtoMnNr_7WNF7y5N1n2ZukEzErD_XkLjhCIbn2b528DDaedwzpcUxqJ8iwADuMoxAQhxgcsR8zPWkaNzN-o_Xy00Wmb-HaDAxIujLUGgV_-1poU-5GHlW4utlrw77o5MQiyKj-deqym5CY3NqX58c3XGyD9PTYxHM6nquVN-iOD1nopOI51pcBS_pjBu6G3VxBR6EGSVinPDlU-NKiDirec_rXxlGd7U1XCMulGVzOg0G_uEAtZRLwJtkvnaIJCauzVCqV3I9aPuBK774yymGFnnaFZfYXuRuqxy-rl6dqAFwB21mU_ZKTPLrGX6-Ikg9QR8v9nh4voWEjW_sNWdDJumMow2NgrhUjM_Jn8YrZu0F_FFT9H-aRc6Goe69rHL2b_yfKa3j2-ulJJFst0L-lsFkoNf0CLQErfhfAY0GFL_rwxbJOaxIiUqvk5e0Xm8aWtv6P4x3nV_mh9awvTTXUBiH6UXb8s14blkD0veLE4VVJrir2QfU3SP-5gSqGIkSZyQlF5hlv8Zt7l8NsKH2ychA4ZH94QxlX4Y2EjKrcFfS_G08pJNYp-_hYg7bRi_FHuQiJiV99T8EV2eO4tvQA4euxYk9lNEATMi1HWSOQ8LXFpE2nKV9kLTHv4RQa9dPGQmUyiA2GfMadDs95el1WxT3Icp-bSEnb7qwe_kFdX2m8QR4_A=w1920-h914'}
                alt={product.name}
                width="56"
                height="28.51"
              />
            </div>
          ))}
        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
};
