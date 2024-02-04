import type { UseCase } from "../../_shared/use-case";
import type { DemoId } from "../../../domain/demo/demo-id";
import { ApplicationError, ApplicationErrors } from "../../_shared/application-error";

type DemoCreateParams = {
    demoId: DemoId;
    newTitle: string;
}

const useCase: UseCase<DemoCreateParams> = (context) => async ({ demoId, newTitle }) => {
    const aggregate = await context.repositories.demo.findById(demoId);

    if (!aggregate)
        throw new ApplicationError({
            code: ApplicationErrors.DEMO_NOT_FOUND,
            additional_client_information: "Demo not found",
            logging_information: `Demo not found with id: ${demoId}`
        });

    aggregate.setTitle(newTitle);
    await context.repositories.demo.save(aggregate);
};

export default useCase;
