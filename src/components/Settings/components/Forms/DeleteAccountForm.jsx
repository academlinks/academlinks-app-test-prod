import { useSelector } from "react-redux";

import { useSettingsQuery } from "../../../../hooks";
import { selectActiveUserLoadingState } from "../../../../store/selectors/activeUserSelectors";

import styles from "../styles/detailed.module.scss";
import { Input, BTN, BlockSpinner, Error } from "../../../Layouts";

function DeleteAccountForm() {
  const { loading, error, message } = useSelector(selectActiveUserLoadingState);

  const { deleteAccountQuery } = useSettingsQuery();

  return (
    <form className={styles.formsContainer} onSubmit={deleteAccountQuery}>
      <div className={`${styles.form} ${styles.passForm}`}>
        <Input
          placeholder="password"
          type="password"
          name="password"
          className={styles.inpField}
          id="password"
        />
      </div>
      {loading && <BlockSpinner />}
      {error && <Error msg={message} />}

      <BTN
        type="submit"
        className={`${styles.singleBtn} ${styles.deleteAccountBtn}`}
      >
        delete account
      </BTN>
    </form>
  );
}

export default DeleteAccountForm;
