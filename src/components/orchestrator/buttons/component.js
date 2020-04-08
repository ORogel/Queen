import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import D from 'i18n';
import { DIRECT_CONTINUE_COMPONENTS, REFUSAL, DOESNT_KNOW, QUEEN_DATA_KEYS } from 'utils/constants';
import {
  getResponsesNameFromComponent,
  addResponseToQueenData,
  isInQueenDataRefusal,
  isInQueenDataDoesntKnow,
} from 'utils/questionnaire';
import styles from './buttons.scss';

const Buttons = ({
  currentComponent,
  page,
  queenData,
  canContinue,
  previousClicked,
  nbModules,
  pagePrevious,
  pageNext,
  pageFastForward,
  quit,
}) => {
  const { componentType } = currentComponent;
  const returnLabel = page === 0 ? '' : D.goBackReturn;
  const nextLabel = nbModules - 1 === page ? D.saveAndQuit : `${D.nextContinue} \u2192`;
  const pageNextFunction = nbModules - 1 === page ? quit : pageNext;

  const [refusalChecked, setRefusalChecked] = useState(false);
  const [doesntKnowChecked, setDoesntKnowChecked] = useState(false);

  useEffect(() => {
    setRefusalChecked(false);
    setDoesntKnowChecked(false);
  }, [currentComponent]);

  useEffect(() => {
    const responseNames = getResponsesNameFromComponent(currentComponent);
    if (responseNames) {
      if (isInQueenDataRefusal(queenData)(responseNames)) {
        setRefusalChecked(true);
        setDoesntKnowChecked(false);
      } else if (isInQueenDataDoesntKnow(queenData)(responseNames)) {
        setRefusalChecked(false);
        setDoesntKnowChecked(true);
      } else {
        setRefusalChecked(false);
        setDoesntKnowChecked(false);
      }
    }
  }, [page]);

  const setSpecialAnswer = specialType => {
    let newQueenData = { ...queenData };
    if (QUEEN_DATA_KEYS.includes(specialType)) {
      const responseNames = getResponsesNameFromComponent(currentComponent);
      responseNames.forEach(name => {
        newQueenData = addResponseToQueenData(queenData)(name)(specialType);
      });
    }
    return newQueenData;
  };

  const getSpecialAnswerType = () => {
    if (refusalChecked) return REFUSAL;
    if (doesntKnowChecked) return DOESNT_KNOW;
    return null;
  };

  /**
   * This function changes the current page
   * @param {Function} func : function to apply
   * @param {String} specialAnswerType : the type of specialAnswer (REFUSAL or DOESNT_KNOW)
   */
  const pageChange = (func, specialAnswerType) => {
    const newQueenData = setSpecialAnswer(specialAnswerType || getSpecialAnswerType());
    func(newQueenData);
  };

  const updateRefusal = () => {
    if (DIRECT_CONTINUE_COMPONENTS.includes(componentType)) {
      pageChange(pageNextFunction, REFUSAL);
    } else if (doesntKnowChecked) setDoesntKnowChecked(false);
    setRefusalChecked(!refusalChecked);
  };

  const updateDoesntKnow = () => {
    if (DIRECT_CONTINUE_COMPONENTS.includes(componentType)) {
      pageChange(pageNextFunction, DOESNT_KNOW);
    } else if (refusalChecked) setRefusalChecked(false);
    setDoesntKnowChecked(!doesntKnowChecked);
  };

  return (
    <>
      <style type="text/css">{styles}</style>
      <div id="buttons" className={`buttons ${!returnLabel && 'btn-alone'}`}>
        {!['Sequence', 'Subsequence'].includes(componentType) && (
          <>
            <button className="specific-modality" type="button">
              Commentaire
            </button>

            <button
              type="button"
              className={`doesntknow specific-modality ${
                doesntKnowChecked ? 'content-checked' : ''
              }`}
              onClick={updateDoesntKnow}
            >
              <span className="shortcut">F2</span>
              {D.doesntKnowButton}
              <span className="checked">{doesntKnowChecked ? '✓' : ''}</span>
            </button>
            <button
              type="button"
              className={`refusal specific-modality ${refusalChecked ? 'content-checked' : ''}`}
              onClick={updateRefusal}
            >
              <span className="shortcut">F4</span>
              {D.refusalButton}
              <span className="checked">{refusalChecked ? '✓' : ''}</span>
            </button>
          </>
        )}
        {returnLabel && (
          <button
            className="navigation-button"
            type="button"
            onClick={() => pageChange(pagePrevious)}
          >
            {returnLabel}
          </button>
        )}
        {!DIRECT_CONTINUE_COMPONENTS.includes(componentType) && !previousClicked && (
          <button
            className="navigation-button"
            type="button"
            onClick={() => pageChange(pageNextFunction)}
            disabled={!canContinue && !refusalChecked && !doesntKnowChecked}
          >
            {nextLabel}
          </button>
        )}

        <button
          className="navigation-button"
          type="button"
          onClick={() => pageChange(pageFastForward)}
        >
          {`${D.fastForward} \u21E5`}
        </button>
      </div>
    </>
  );
};

Buttons.propTypes = {
  currentComponent: PropTypes.objectOf(PropTypes.any).isRequired,
  page: PropTypes.number.isRequired,
  queenData: PropTypes.objectOf(PropTypes.any).isRequired,
  canContinue: PropTypes.bool.isRequired,
  previousClicked: PropTypes.bool.isRequired,
  nbModules: PropTypes.number.isRequired,
  pageNext: PropTypes.func.isRequired,
  pagePrevious: PropTypes.func.isRequired,
  pageFastForward: PropTypes.func.isRequired,
  quit: PropTypes.func.isRequired,
};

export default Buttons;
