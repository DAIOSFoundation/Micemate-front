import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCategoryQuery } from "@/api/etc/category.query";
import { useNewApplyRegisterMutation } from "@/api/events/events.query";
import { useNavigate, useOutletContext } from "react-router-dom";
import { UserInformationRequest, NewApplyRegisterRequest } from "@/type";
import { useMyInformationQuery } from "@/api/users/users.query";
import { useToast } from "@/hook/useToast";

interface UserInfoConText {
  authInfo: UserInformationRequest;
}

const newApplyRegisterSchema = z.object({
  title: z.string().trim().min(1, "프로젝트 제목을 입력해주세요."),
  category: z.number().min(1, "행사 분야를 선택해주세요."),
});

const NewApplyPage = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const category = useCategoryQuery();

  const useNewApplyRegister = useNewApplyRegisterMutation();
  const OutletContext = useOutletContext<UserInfoConText>();
  const authInfo = OutletContext.authInfo;
  const navigate = useNavigate();
  const { openToast } = useToast();

  const { data: myInformation } = useMyInformationQuery({
    token: token,
    user_id: userId,
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    resolver: zodResolver(newApplyRegisterSchema),
  });

  const onSubmit = handleSubmit((data) => {
    const registerData: NewApplyRegisterRequest = {
      token: authInfo.token,
      data: { title: data.title, category_id: data.category },
    };
    useNewApplyRegister.mutate(registerData, {
      onSuccess: (data) => {
        openToast("저장 되었습니다.");
        const event_id = data.data.event_id;
        navigate(`/host/my/apply-register/edit/${event_id}/state`);
      },
    });
  });

  return (
    <div className="cont_area">
      <div className="cont_panel type2">
        <div className="tit_wrap">
          <h2 className="fs_40 fw_700">
            {`${myInformation.data.company.company_name}님 반갑습니다`}
          </h2>
        </div>
        <div className="tit_wrap mt_12">
          <h3 className="fs_18">
            성공적인 행사가 될 수 있도록 도와드리겠습니다.
          </h3>
        </div>
        <form onSubmit={onSubmit}>
          <div className="tit_wrap mt_62">
            <h3 className="fs_20">
              프로젝트 제목 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <input
              className="w_384"
              type="text"
              placeholder="제목을 입력해주세요"
              {...register("title")}
            />
          </div>
          <div className="tit_wrap mt_25">
            <h3 className="fs_20">
              행사 분야 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <Controller
              name="category"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <select
                    value={value}
                    onChange={(e) => {
                      const selectedValue = parseInt(e.target.value);
                      onChange(selectedValue);
                    }}
                    defaultValue="defalue"
                    className="w_384"
                  >
                    <option value="defalue" disabled>
                      카테고리 선택
                    </option>
                    {category &&
                      category?.data?.map((data) => {
                        return (
                          <option key={data.id} value={data.id}>
                            {data.name}
                          </option>
                        );
                      })}
                  </select>
                );
              }}
            />
          </div>
          <div className="dis_flex justify_between mt_326">
            <div className="btn_wrap"></div>
            <div className="btn_wrap gap23">
              <button disabled={!isValid} className="btn dark_blue w_292">
                등록 시작
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewApplyPage;
