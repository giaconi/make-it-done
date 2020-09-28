class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :done, :duration, :list_id
end
