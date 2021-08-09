import { useAPI, useAsyncValue } from 'utils/hook';

export const usePutQuestionnairesInCache = () => {
  const { getQuestionnaire } = useAPI();

  const refreshGetQuestionnaire = useAsyncValue(getQuestionnaire);

  const putQuestionnairesInCache = async questionnaireIds => {
    const questionnaireIdsSuccess = [];
    await (questionnaireIds || []).reduce(async (previousPromise, questionnaireId) => {
      await previousPromise;
      const getQuestionnaire = async () => {
        const { error, status, statusText } = await refreshGetQuestionnaire.current(
          questionnaireId
        );
        if (error && ![404, 403, 500].includes(status)) throw new Error(statusText);
        else if (!error) questionnaireIdsSuccess.push(questionnaireId);
      };

      return getQuestionnaire();
    }, Promise.resolve());
    return questionnaireIdsSuccess;
  };

  return putQuestionnairesInCache;
};
