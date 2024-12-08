import argparse
from fate_client.pipeline import FateFlowPipeline
import pandas as pd

def main(bene_id):
    pipeline = FateFlowPipeline.load_model("./pipeline.pkl")
    component = pipeline.get_task_info("hetero_nn_1").get_output_data()['test_output_data']
    # print(type(component))
    filtered_df = component[component['BeneID'] == bene_id]
    print(filtered_df['predict_result'].values[0])

    pipeline2 = FateFlowPipeline.load_model("./pipeline_sig.pkl")
    component2 = pipeline2.get_task_info("hetero_nn_1").get_output_data()['test_output_data']
    # print(type(component))
    filtered_df2 = component2[component2['BeneID'] == bene_id]
    print(filtered_df2['predict_result'].values[0])

    try:
        pipeline3 = FateFlowPipeline.load_model("../homo_nn/pipeline.pkl")
        component3 = pipeline3.get_task_info("nn_0").get_output_data()['train_output_data']
        filtered_df3 = component3[component2['BeneID'] == bene_id]
        print(filtered_df3['predict_result'].values[0])
    except:
        print("NAN")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Get predict result by BeneID")
    parser.add_argument("--bene_id", type=str, help="The BeneID to search for")
    
    args = parser.parse_args()
    main(args.bene_id)
