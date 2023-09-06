/**
 * Copyright © 2023 OpenKF & OpenIM open source community. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface GetBotInfoResponse {
    uuid: string;
    bot_addr: string;
    bot_port: number;
    bot_token: string;
    nickname: string;
    avatar: string;
    description: string;
}

export interface GetBotInfoListResponse {
    page: number;
    page_size: number;
    total: number;
    list: GetBotInfoResponse[];
}