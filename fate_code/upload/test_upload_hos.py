#
#  Copyright 2019 The FATE Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
from fate_client.pipeline import FateFlowPipeline

pipeline = FateFlowPipeline().set_parties(
    local="0")
pipeline.set_site_role("local")
pipeline.set_site_party_id("0")
meta = {'delimiter': ',',
        'dtype': 'float64',
        'input_format': 'dense',
        'label_type': 'float64',
        'label_name': 'DEATH_EVENT',
        'match_id_name': 'BeneID',}

pipeline.transform_local_file_to_dataframe(  file="/data/projects/fate/examples/data/normalized_heart_failure.csv",
    meta=meta, head=True, extend_sid=True,
    namespace="experiment",
    name="hospital_heart_data1")

pipeline = FateFlowPipeline().set_parties(
    local="0")
pipeline.set_site_role("local")
pipeline.set_site_party_id("0")

meta = {'delimiter': ',',
        'dtype': 'float64',
        'input_format': 'dense',
        'label_type': 'float64',
        'label_name': 'DEATH_EVENT',
        'match_id_name': 'BeneID',}

pipeline.transform_local_file_to_dataframe(  file="/data/projects/fate/examples/data/normalized_heart_failure.csv",
    meta=meta, head=True, extend_sid=True,
    namespace="experiment",
    name="hospital_heart_data2")
